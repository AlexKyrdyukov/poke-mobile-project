import reactNative from 'react-native';
import colors from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  componentContainer: {
    backgroundColor: colors.tabNavigation[props.theme].background,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 80,
    borderTopColor: 'black',
    borderTopWidth: 2,
    padding: 10,
  },
  touchableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
