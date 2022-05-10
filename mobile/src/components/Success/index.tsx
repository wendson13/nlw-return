import { Image, Text, TouchableOpacity, View } from 'react-native';
import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';
import { styles } from './styles';

type SuccessProps = {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        we appreciate feedback
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>
          I want to send another
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
