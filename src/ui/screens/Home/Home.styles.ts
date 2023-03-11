import reactNative from 'react-native';
import { colors } from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  sectionContainer: {
    backgroundColor: colors.screen[props.theme].background,
    flex: 1,
  },
  textContainer: {
    padding: 30,
  },
  textStyle: {
    color: colors.screen[props.theme].text,
    fontSize: 22,
    marginBottom: 20,
  },
  imageContainerStyle: {
    maxHeight: 300,
    maxWidth: 300,
    marginBottom: 40,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
