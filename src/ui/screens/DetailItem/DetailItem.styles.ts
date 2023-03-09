import reactNative from 'react-native';

const style = reactNative.StyleSheet.create({
  componentContainer: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  sectionContainer: {
    width: '85%',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#faebd7',
    marginBottom: 20,
  },
  imageStyles: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginTop: 0,
  },
  textStyle: {
    color: '#fff5ee',
    fontSize: 32,
  },

});

export default style;
