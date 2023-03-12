import reactNative from 'react-native';
import colors from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  containerCompanentStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  pokemonContainerStyles: {
    borderRadius: 20,
    backgroundColor: colors.screen[props.theme].imageContainer,
    width: 220,
    height: 250,
  },
  imageStyles: {
    height: 170,
    width: 200,
  },
  textContainer: {
    alignItems: 'center',
  },
  textStyle: {
    color: colors.screen[props.theme].text,
    fontSize: 16,
  },
});

export default styles;
