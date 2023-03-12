import reactNative from 'react-native';
import colors from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  componentContainer: {
    marginBottom: 10,
  },
  inputRowContainer: {
    backgroundColor: colors.input[props.theme].primary.background,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: colors.input[props.theme].primary.border,
    borderRadius: 5,
  },
  inputStyle: {
    fontSize: 16,
    width: '80%',
    paddingLeft: 15,
    color: colors.input[props.theme].primary.text,
  },
  inputFocusStyle: {
    backgroundColor: colors.input[props.theme].focus.background,
    borderColor: colors.input[props.theme].focus.border,
  },
  hintText: {
    marginTop: 5,
    fontSize: 16,
    paddingLeft: 10,
    color: colors.input[props.theme].primary.text,
  },
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
});

export default styles;
