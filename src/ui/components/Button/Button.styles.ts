import reactNative from 'react-native';
import type { Theme } from 'src/types/theme';
import colors from 'src/consts/colors';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  appButtonContainer: {
    backgroundColor: colors.button[props.theme].background,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: colors.button[props.theme].text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
