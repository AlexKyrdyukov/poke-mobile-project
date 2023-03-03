import reactNative from 'react-native';

const styles = reactNative.StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#555',
  },
  buttonContainer: {
    backgroundColor: '#009688',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
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
});

export default styles;
