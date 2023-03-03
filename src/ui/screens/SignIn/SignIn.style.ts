import ReactNative from 'react-native';

const style = ReactNative.StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#555',
  },
  appButtonContainer: {
    backgroundColor: '#009788',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  inputStyle: {
    marginBottom: 40,
  },
  titleStyle: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    alignSelf: 'center',
  },
});

export default style;
