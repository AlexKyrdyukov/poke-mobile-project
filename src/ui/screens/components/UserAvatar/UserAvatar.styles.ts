import { colors } from 'src/consts/colors';
import reactNative from 'react-native';
import type { Theme } from 'src/types/theme';

const styles = (props:Theme) => reactNative.StyleSheet.create({
  componentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: colors.screen[props.theme].background,
  },
  imageContainer: {
    borderRadius: 50,
    backgroundColor: colors.screen[props.theme].imageContainer,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    borderRadius: 50,
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
  button: {
    width: 250,
    height: 60,
    backgroundColor: colors.button[props.theme].background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
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
  buttonSignUpContainer: {
    backgroundColor: colors.button[props.theme].background,
    borderRadius: 10,
    paddingVertical: 10,
  },
  buttonSignUpText: {
    fontSize: 18,
    color: colors.button[props.theme].text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
