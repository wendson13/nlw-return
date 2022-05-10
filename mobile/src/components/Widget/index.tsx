import { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { styles } from './styles';
import { theme } from '../../theme';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes;

function WidgetComponent() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const buttonSheetRef = useRef<BottomSheet>(null);

  const handleFeedbackOpen = () => {
    buttonSheetRef.current?.expand();
  };

  const handleResetFeedback = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };

  const handleFeedbackSent = () => {
    setFeedbackSent(true);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.bottom}
        onPress={handleFeedbackOpen}
      >
        <ChatTeardropDots
          size={24}
          weight='bold'
          color={theme.colors.text_on_brand_color}
        />

      </TouchableOpacity>

      <BottomSheet
        ref={buttonSheetRef}
        snapPoints={[1, 300]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent
            ? <Success onSendAnotherFeedback={handleResetFeedback} />
            : feedbackType
              ? <Form
                feedbackType={feedbackType}
                onFeedbackCanceled={handleResetFeedback}
                onFeedbackSent={handleFeedbackSent}
              />
              : <Options onFeedbackTypeChanged={setFeedbackType} />
        }
      </BottomSheet>
    </>
  );
}

export const Widget = gestureHandlerRootHOC(WidgetComponent);
