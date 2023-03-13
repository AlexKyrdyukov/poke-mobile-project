import reactNative from 'react-native';
import colors from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  componentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: colors.screen[props.theme].background,
  },
  imageContainer: {
    backgroundColor: colors.screen[props.theme].imageContainer,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  imageStyles: {
    borderRadius: 1000,
    height: '100%',
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.button[props.theme].text,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
  buttonCameraStyle: {
    position: 'absolute',
    left: 0,
    bottom: 20,
    backgroundColor: colors.default.white,
    borderRadius: 1000,
  },
});

export default styles;
