import { View, Text, FlatList, ActivityIndicator, FlatListProps, ListRenderItem } from 'react-native';
import React from 'react';
import type { Pokemon } from 'src/types/pokemon';
import pokemonApi from 'src/api/pokemonApi';
import { useAppDispatch, useAppSelector } from 'src/store/store';
import { useFetchPokemons } from 'src/hooks/useFetchPokemons';
import { pokeSliceActions } from 'src/store/slices/pokeSlice';
import PokemonItem from '../PokemonItem';
import styles from './MainList.styles';

type PokemonData = {
  item: Pokemon;
  index: number;
  separators: object;
};

const MainList: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    pokemons,
    isloading,
    onEndReached,
    isRefreshing,
    onRefresh,
  } = useFetchPokemons();
  // const pokemons = useAppSelector(({ rootSlice }) => rootSlice.pokemonSlice.pokemons);
  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await pokemonApi.getPokemons();
  //       // eslint-disable-next-line no-console
  //       console.log(response);
  //       const request = response.results.map((item) => {
  //         return pokemonApi.getById(item.name);
  //       });
  //       const pokemons = await Promise.all(request);
  //       dispatch(pokeSliceActions.setPokemons(pokemons));
  //       // eslint-disable-next-line no-console
  //       // console.log(pokemons);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, [dispatch]);
  // eslint-disable-next-line no-console
  console.log(pokemons);
  const keyExtractor = React.useCallback((item: Pokemon) => {
    return item.id.toString();
  }, []);

  const renderItem = React.useCallback((data: PokemonData) => {
    return <PokemonItem pokemon={data.item} />;
  }, []);

  return (
    <View
      style={styles.sectionContainer}
    >{isloading
      ? <ActivityIndicator size="large" />
      : (<FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.25}
        onEndReached={onEndReached}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />)
      }
    </View>
  );
};

export default MainList;
