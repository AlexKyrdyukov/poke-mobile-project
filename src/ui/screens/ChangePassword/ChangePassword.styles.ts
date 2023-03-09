import reactNative from 'react-native';

const style = reactNative.StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffe4b5',
  },
  errorTextStyle: {
    color: 'red',
  },
  errorSectionStyle: {
    borderColor: '#dc143c',
    backgroundColor: '#ffb6c1',
    opacity: 0.8,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputText: {
    fontSize: 18,
    color: '#2e8b57',
  },
  buttonContainer: {
    backgroundColor: '#ff69b4',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#4b0082',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default style;
