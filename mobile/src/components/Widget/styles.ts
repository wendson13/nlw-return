import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  bottom: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 24,
    right: 16,
    bottom: getBottomSpace() + 16,
    backgroundColor: theme.colors.brand
  },

  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16
  },

  indicator: {
    width: 56,
    backgroundColor: theme.colors.text_primary
  }
});
