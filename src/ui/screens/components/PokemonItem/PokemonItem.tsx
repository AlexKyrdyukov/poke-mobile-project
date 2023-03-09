import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import type { Pokemon } from 'src/types/pokemon';

import styles from './PokemonItem.styles';

type Props = {
  pokemon: Pokemon;
  handleNavigation: (name: string) => void;
};

const PokemonItem: React.FC<Props> = (props) => {
  const { handleNavigation, pokemon } = props;
  const {
    name,
    height,
    weight,
    sprites,
  } = pokemon;

  const image = sprites.front_default as string;
  return (
    <View
      style={styles.containerCompanentStyles}
    >
      <TouchableOpacity
        onPress={() => handleNavigation(name)}
        style={styles.pokemonContainerStyles}
      >
      <Image
        style={styles.imageStyles}
        source={{ uri: image }}
/>
    <View
      style={styles.textContainer}
    >
      <Text
      style={styles.textStyle}
      >Name: {name}
      </Text>
      <Text
            style={styles.textStyle}
      >Height: {height}
      </Text>
      <Text
            style={styles.textStyle}
      >Weight: {weight}
      </Text>
    </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(PokemonItem);
