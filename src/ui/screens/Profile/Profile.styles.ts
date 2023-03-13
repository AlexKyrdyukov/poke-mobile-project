import reactNative from 'react-native';
import colors from 'src/consts/colors';
import type { Theme } from 'src/types/theme';

const style = (props: Theme) => reactNative.StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.screen[props.theme].background,
    paddingTop: 20,
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
  checkBoxStyle: {
    marginLeft: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

export default style;
