import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import type { Pokemon } from 'src/types/pokemon';
import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useFetchPokemons } from 'src/hooks/useFetchPokemons';

import PokemonItem from '../PokemonItem';

import styles from './MainList.styles';

type PokemonData = {
  item: Pokemon;
  index: number;
  separators: object;
};

type Props = NativeStackScreenProps<ParamListBase>;

const MainList: React.FC<Props> = (props) => {
  const { navigation } = props;
  const {
    pokemons,
    isloading,
    onEndReached,
    isRefreshing,
    onRefresh,
  } = useFetchPokemons();

  const keyExtractor = React.useCallback((item: Pokemon) => {
    return item.name;
  }, []);

  const onHandleDetailScreen = React.useCallback((name: string) => {
    return navigation.navigate('DetailItem', {
      name,
    });
  }, [navigation]);

  const renderItem = React.useCallback((data: PokemonData) => {
    return <PokemonItem handleNavigation={onHandleDetailScreen} pokemon={data.item} />;
  }, [onHandleDetailScreen]);

  return (
    <View
      style={styles.sectionContainer}
    >{isloading
      ? <ActivityIndicator size="large" />
      : (<FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={1}
        onEndReached={onEndReached}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />)
      }
    </View>
  );
};

export default MainList;
