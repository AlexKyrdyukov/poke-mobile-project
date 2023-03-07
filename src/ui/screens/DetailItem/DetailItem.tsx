import { View, ActivityIndicator, Image, ScrollView, Text } from 'react-native';
import React from 'react';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { usePokemon } from 'src/hooks/usePokemon';

import styles from './DetailItem.styles';

type Props = NativeStackScreenProps<ParamListBase, 'DetailItem', undefined>;
type ParamList = {
  name: string;
};

const DetailItem: React.FC<Props> = ({ route }) => {
  const { name } = route.params as ParamList;

  const { isLoading, links, pokemon } = usePokemon(name);

  return (
    <View
      style={styles.componentContainer}
    >
      {isLoading
        ? <ActivityIndicator size="large" />
        : (
          <ScrollView>
            <View
              style={styles.textContainer}
            >
            <Text
              style={styles.textStyle}
            >Name: {pokemon?.name}
            </Text>
            <Text
              style={styles.textStyle}
            >Height: {pokemon?.height}
            </Text>
            <Text
              style={styles.textStyle}
            >Weight: {pokemon?.weight}
            </Text>
            </View>
            <View
              style={styles.sectionContainer}
            >{
                links?.map((item) => (
                  <Image
                    style={styles.imageContainer}
                    key={item}
                    source={{ uri: item }
                    }
                  />
                ))}
            </View>
          </ScrollView>
        )
      }
    </View>
  );
};

export default React.memo(DetailItem);
