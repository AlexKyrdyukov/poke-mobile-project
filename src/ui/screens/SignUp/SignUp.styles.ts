import reactNative from 'react-native';

const styles = reactNative.StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#555',
  },
  titleStyle: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    alignSelf: 'center',
  },
  buttonSignUpContainer: {
    backgroundColor: '#ff69b4',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 40,
  },
  buttonSignUpText: {
    fontSize: 18,
    color: '#4b0082',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
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
});

export default styles;
