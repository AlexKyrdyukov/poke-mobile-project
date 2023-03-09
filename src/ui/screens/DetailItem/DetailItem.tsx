import { View, ActivityIndicator, Image, ScrollView, Text, FlatList } from 'react-native';
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

  const renderItem = React.useCallback((data: { item: string }) => (
    <View
      style={styles.imageContainer}
    >
      <Image
        style={styles.imageStyles}
        key={data.item}
        source={{ uri: data.item }
        }
      />
    </View>
  ), []);

  return (
    <View
      style={styles.componentContainer}
    >
      {isLoading
        ? <ActivityIndicator size="large" />
        : (
          <>
            <View>
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
                <Text
                  style={styles.textStyle}
                >Total image: {links?.length}
                </Text>
              </View>
            </View>
            <FlatList
              style={styles.sectionContainer}
              data={links}
              renderItem={renderItem}
            />
          </>
        )
      }
    </View >
  );
};

export default React.memo(DetailItem);
