import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  isLoading: boolean;
}

export function Button({ isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
    >
      {
        isLoading
          ? <ActivityIndicator
            color={theme.colors.text_on_brand_color}
          />

          : <Text
            style={styles.title}
          >
            send feedback
          </Text>
      }
    </TouchableOpacity>
  );
}
