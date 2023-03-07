import { View, ActivityIndicator, Image } from 'react-native';
import React from 'react';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import pokemonApi from 'src/api/pokemonApi';
import type { Pokemon, Sprites } from 'src/types/pokemon';
import styles from './DetailItem.styles';

type Props = NativeStackScreenProps<ParamListBase, 'DetailItem', undefined>;
type ParamList = {
  name: string;
};

const DetailItem: React.FC<Props> = ({ route }) => {
  const { name } = route.params as ParamList;

  const [pokemon, setPokemon] = React.useState<Pokemon>();
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      const response = await pokemonApi.getById(name);
      setPokemon(response);
      setIsLoading(false);
    })();
  }, [name]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const a = {
    a: {
      a: 'b',
      // b: 'c',
      d: {
        // e: 'f',
        m: 'f',
      },
    },
  };
  const images = React.useMemo(() => {
    // const { sprites } = pokemon;
    const getImages = (sprites: Sprites) => {
      return Object.values(sprites).filter((item) => {
        console.log(item);
        return item === '';
      });
    };
    if (pokemon) {
      return getImages(a);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(images);
  return (
    <View
      style={styles.sectionContainer}
    >
      {isLoading
        ? <ActivityIndicator size="large" />
        : (
          <View>{
            images!.map((item) => (
              <Image
                style={styles.imageContainer}
                key={item as string}
                source={{ uri: item as string }
                }
              />
            ))}
          </View>
        )
      }
    </View>
  );
};

export default React.memo(DetailItem);
