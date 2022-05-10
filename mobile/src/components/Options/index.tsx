import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';
import { styles } from './styles';

type OptionsProps = {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: OptionsProps) {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >
        let your feedback
      </Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, item]) => {
            return (
              <Option
                key={key}
                title={item.title}
                image={item.image}
                onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
              />
            );
          })
        }
      </View>
      <Copyright />
    </View>
  );
}
