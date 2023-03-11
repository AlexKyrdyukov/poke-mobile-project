import reactNative from 'react-native';
import { colors } from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const style = (props: Theme) => reactNative.StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: colors.screen[props.theme].background,
  },
  buttonSignInContainer: {
    backgroundColor: colors.button[props.theme].background,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 30,
    marginBottom: 30,
  },
  buttonLinkSignUpContainer: {
    backgroundColor: colors.button[props.theme].background,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 40,
  },
  buttonSignInText: {
    fontSize: 18,
    color: colors.button[props.theme].text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonLinkSignUpText: {
    fontSize: 20,
    color: colors.button[props.theme].text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  titleStyle: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    alignSelf: 'center',
  },
  errorTextStyle: {
    color: 'red',
  },
  errorSectionStyle: {
    borderColor: colors.input[props.theme].error.border,
    backgroundColor: colors.input[props.theme].error.background,
    opacity: 0.8,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputText: {
    fontSize: 18,
    color: colors.input[props.theme].primary.text,
  },
});

export default style;
