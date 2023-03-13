import reactNative from 'react-native';
import colors from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const style = (props: Theme) => reactNative.StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.screen[props.theme].background,
    paddingHorizontal: 30,
  },
  errorTextStyle: {
    color: colors.input[props.theme].error.border,
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
  buttonContainer: {
    backgroundColor: colors.button[props.theme].background,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    color: colors.button[props.theme].text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default style;
