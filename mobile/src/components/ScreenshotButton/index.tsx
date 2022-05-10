import { Camera, Trash } from 'phosphor-react-native';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';
import { styles } from './styles';

type ScreenshotButtonProps = {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeScreenshot, onRemoveShot }: ScreenshotButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeScreenshot}
    >
      {
        screenshot
          ? <View>
            <Image
              source={{ uri: screenshot }}
              style={styles.image}
            />
            <Trash
              size={22}
              color={theme.colors.text_secondary}
              weight='fill'
              style={styles.removeIcon}
            />

          </View>

          : <Camera
            size={24}
            color={theme.colors.text_secondary}
            weight='bold'
          />
      }
    </TouchableOpacity>
  );
}
