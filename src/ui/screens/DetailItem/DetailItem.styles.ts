import reactNative from 'react-native';
import { colors } from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const style = (props: Theme) => reactNative.StyleSheet.create({
  componentContainer: {
    flex: 1,
    backgroundColor: colors.screen[props.theme].background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  sectionContainer: {
    width: '85%',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.screen[props.theme].imageContainer,
    marginBottom: 20,
  },
  imageStyles: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginTop: 0,
  },
  textStyle: {
    color: colors.screen[props.theme].text,
    fontSize: 32,
  },
});

export default style;
