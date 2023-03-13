import { View, Text, Image } from 'react-native';
import React from 'react';

import useTheme from 'src/hooks/useTheme';
import Dollars from 'src/assets/icons/dollars.svg';
import styles from './Home.styles';

const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View
      style={styles({ theme }).sectionContainer}
    >
      <View
        style={styles({ theme }).imageContainerStyle}
      >
        <Image
          style={styles({ theme }).imageStyle}
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png' }}
        />
      </View>
      <View
        style={styles({ theme }).textContainer}
      >
        <Text
          style={styles({ theme }).textStyle}
        >Hello dear friend, this application will help you find all kinds of pokemon,
          and consider each of them in detail
        </Text>
        <Text
          style={styles({ theme }).textStyle}
        >You can also donate the card number for the development of the project
          2346 8883 3452 0930. Good Luck!!!<Dollars width={40} height={40} />
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Home);
