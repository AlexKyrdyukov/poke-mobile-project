import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

import type { Pokemon } from 'src/types/pokemon';
import styles from './PokemonItem.styles';

type Props = {
  pokemon: Pokemon;
};

const PokemonItem: React.FC<Props> = ({ pokemon }) => {
  console.log(pokemon);
  const {
    name,
    id,
    height,
    weight,
    sprites,
  } = pokemon;

  const image = sprites.front_default as string;
  return (
    <View
      style={styles.containerStyles}
    >
      <Image
        style={styles.imageStyles}
        source={{ uri: image }}
/>
    <View
      style={styles.textContainer}
    >
      <Text>Name: {name}</Text>
      <Text>Height: {height}</Text>
      <Text>Weight: {weight}</Text>
    </View>

    </View>
  );
};

export default React.memo(PokemonItem);
