import reactNative from 'react-native';

const style = reactNative.StyleSheet.create({
  componentContainer: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: 50,
    margin: 20,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff5ee',
    fontSize: 32,
  },
});

export default style;
