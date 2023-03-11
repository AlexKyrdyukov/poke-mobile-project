import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import type { Pokemon } from 'src/types/pokemon';
import useTheme from 'src/hooks/useTheme';
import styles from './PokemonItem.styles';

type Props = {
  pokemon: Pokemon;
  handleNavigation: (name: string) => void;
};

const PokemonItem: React.FC<Props> = (props) => {
  const { theme } = useTheme();
  const { handleNavigation, pokemon } = props;
  const {
    name,
    height,
    weight,
    sprites,
  } = pokemon;
  const image = sprites?.back_default;

  const isString = (image: string | Record<string, string | object>): image is string => {
    return (image as string)?.length !== undefined;
  };

  return (
    <View
      style={styles({ theme }).containerCompanentStyles}
    >
      <TouchableOpacity
        onPress={() => handleNavigation(name)}
        style={styles({ theme }).pokemonContainerStyles}
      >
        {isString(image) &&
          (<Image
          style={styles({ theme }).imageStyles}
            source={{ uri: image }}
          />)
        }
        <View
          style={styles({ theme }).textContainer}
        >
          <Text
            style={styles({ theme }).textStyle}
          >Name: {name}
          </Text>
          <Text
            style={styles({ theme }).textStyle}
          >Height: {height}
          </Text>
          <Text
            style={styles({ theme }).textStyle}
          >Weight: {weight}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(PokemonItem);
