import { Image, ImageProps, TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

type OptionProps = TouchableOpacityProps & {
  title: string;
  image: ImageProps;
}

export function Option({ title, image, ...rest }: OptionProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Image
        source={image}
        style={styles.image}
      />

      <Text
        style={styles.title}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
