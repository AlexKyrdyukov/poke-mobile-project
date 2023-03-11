import { View, ActivityIndicator, Image, Text, FlatList } from 'react-native';
import React from 'react';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { usePokemon } from 'src/hooks/usePokemon';
import useTheme from 'src/hooks/useTheme';
import styles from './DetailItem.styles';

type Props = NativeStackScreenProps<ParamListBase, 'DetailItem', undefined>;
type ParamList = {
  name: string;
};

const DetailItem: React.FC<Props> = ({ route }) => {
  const { name } = route.params as ParamList;
  const { theme } = useTheme();
  const { isLoading, links, pokemon } = usePokemon(name);

  const renderItem = React.useCallback((data: { item: string }) => (
    <View
      style={styles({ theme }).imageContainer}
    >
      <Image
        style={styles({ theme }).imageStyles}
        key={data.item}
        source={{ uri: data.item }
        }
      />
    </View>
  ), [theme]);

  return (
    <View
      style={styles({ theme }).componentContainer}
    >
      {isLoading
        ? <ActivityIndicator size="large" />
        : (
          <>
            <View>
              <View
                style={styles({ theme }).textContainer}
              >
                <Text
                  style={styles({ theme }).textStyle}
                >Name: {pokemon?.name}
                </Text>
                <Text
                  style={styles({ theme }).textStyle}
                >Height: {pokemon?.height}
                </Text>
                <Text
                  style={styles({ theme }).textStyle}
                >Weight: {pokemon?.weight}
                </Text>
                <Text
                  style={styles({ theme }).textStyle}
                >Total image: {links?.length}
                </Text>
              </View>
            </View>
            <FlatList
              style={styles({ theme }).sectionContainer}
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
