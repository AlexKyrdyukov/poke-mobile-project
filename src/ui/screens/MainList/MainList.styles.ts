import reactNative from 'react-native';
import colors from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const style = (props: Theme) => reactNative.StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: colors.screen[props.theme].background,
  },
  indicatorStyles: {
    position: 'absolute',
    bottom: 0,
    left: '45%',
  },
});

export default style;
