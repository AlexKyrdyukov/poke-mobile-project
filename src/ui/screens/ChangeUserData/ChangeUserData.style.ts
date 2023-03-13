import reactNative from 'react-native';
import colors from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  componentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: colors.screen[props.theme].background,
  },
  errorTextStyle: {
    color: colors.input[props.theme].error.border,
  },
  errorSectionStyle: {
    borderColor: colors.input[props.theme].error.border,
    backgroundColor: colors.input[props.theme].error.background,
    opacity: 0.8,
  },
  buttonContainer: {
    backgroundColor: colors.button[props.theme].background,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: colors.button[props.theme].text,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputText: {
    fontSize: 18,
    color: colors.input[props.theme].primary.text,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default styles;
