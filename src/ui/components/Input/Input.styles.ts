import reactNative from 'react-native';

const styles = reactNative.StyleSheet.create({
  componentContainer: {
    marginBottom: 10,
  },
  inputRowContainer: {
    backgroundColor: '#b0e0e6',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
  },
  imageStyle: {
    padding: 10,
    margin: 15,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 16,
    width: '80%',
    paddingLeft: 15,
    color: '#000080',
  },
  inputFocusStyle: {
    backgroundColor: '#f5fffa',
    borderColor: '#00ff00',
  },
  hintText: {
    marginTop: 5,
    fontSize: 16,
    paddingLeft: 10,
    color: '#fdf5e6',
  },
});

export default styles;
