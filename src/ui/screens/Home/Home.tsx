import { View, Text, Image } from 'react-native';
import React from 'react';

import { images } from 'src/consts/images';
import styles from './Home.styles';

const Home: React.FC = () => {
  return (
    <View
      style={styles.sectionContainer}
    >
      <View
        style={styles.imageContainerStyle}
      >
        <Image
          style={styles.imageStyle}
          source={{ uri: images.homePage.pokemon }}
        />
      </View>
      <View
        style={styles.textContainer}
      >
        <Text
          style={styles.textStyle}
        >Hello dear friend, this application will help you find all kinds of pokemon,
          and consider each of them in detail
        </Text>
        <Text
          style={styles.textStyle}
        >You can also donate the card number for the development of the project
          2346 8883 3452 0930. Good Luck!!!
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Home);
