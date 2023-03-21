import reactNative from 'react-native';
import type { Theme } from 'src/types/theme';
import colors from 'src/consts/colors';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.screen[props.theme].background,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default styles;
