import { ArrowLeft } from 'phosphor-react-native';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { Copyright } from '../Copyright';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType } from '../Widget';
import { captureScreen } from 'react-native-view-shot';
import { styles } from './styles';
import { useState } from 'react';
import { api } from '../../libs/api';
import * as FileSystem from 'expo-file-system';

type FormProps = {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: FormProps) {
  const [screenshot, setScreenshot] = useState('');
  const [isSendFeedback, setIsSendFeedback] = useState(false);
  const [comment, setComment] = useState('');

  const handleTakeScreenshot = async () => {
    try {
      const screenshotUri = await captureScreen({
        format: 'png',
        quality: 0.8
      });

      setScreenshot(screenshotUri);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScreenshotRemove = () => {
    setScreenshot('');
  };

  const handleSendFeedback = async () => {
    if (isSendFeedback) return;

    setIsSendFeedback(true);
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try {
      await api.post('feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();
    } catch (error) {
      console.log(error);
      setIsSendFeedback(false);
    }
  };
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View
          style={styles.titleContainer}
        >
          <Image
            style={styles.image}
            source={feedbackTypeInfo.image}
          />
          <Text
            style={styles.titleText}
          >
            {feedbackTypeInfo.title}
          </Text>

        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Is somethings not working right? We want to correct. Tell us in detail what happening'
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        value={comment}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeScreenshot={handleTakeScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />

        <Button
          onPress={handleSendFeedback}
          // disabled={}
          isLoading={isSendFeedback}
        />
      </View>

      <Copyright />
    </View>
  );
}
