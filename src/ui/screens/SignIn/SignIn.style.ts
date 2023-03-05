import reactNative from 'react-native';

const style = reactNative.StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#555',
  },
  buttonSignInContainer: {
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 30,
    marginBottom: 30,
  },
  buttonLinkSignUpContainer: {
    backgroundColor: '#8a2be2',
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 40,
  },
  buttonSignInText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonLinkSignUpText: {
    fontSize: 20,
    color: '#fff',
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

export default style;
