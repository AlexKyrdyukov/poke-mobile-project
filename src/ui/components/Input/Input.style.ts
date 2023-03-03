import reactNative from 'react-native';

const styles = reactNative.StyleSheet.create({
  componentContainer: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0ffff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 15,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textInputStyle: {
    fontSize: 20,
    flex: 1,
    width: '100%',
    paddingLeft: 15,
  },
});

export default styles;
