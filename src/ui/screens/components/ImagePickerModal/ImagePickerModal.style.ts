import reactNative from 'react-native';
import type { Theme } from 'src/types/theme';
import colors from 'src/consts/colors';

const styles = (props: Theme) => reactNative.StyleSheet.create({
  componentContainer: {
    flex: 1,
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttons: {
    backgroundColor: colors.default.white,
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
