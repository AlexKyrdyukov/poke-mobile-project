import React from 'react';

import { useAppSelector, useAppDispatch } from 'src/store';
import pokemonApi from 'src/api/pokemonApi/pokemonApi';
import { pokeSliceActions } from 'src/store/slices/pokeSlice';

const LIMIT = 20;

const usePokemons = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(({ rootSlice }) => rootSlice.pokemonSlice.pokemons);
  const [isloading, setIsLoading] = React.useState(true);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const response = await pokemonApi.getPokemons();
      const request = response.results.map((item) => {
        return pokemonApi.getById(item.name);
      });
      const pokemons = await Promise.all(request);
      dispatch(pokeSliceActions.setPokemons(pokemons));
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEndReached = async () => {
    if (pokemons?.length) {
      setIsUpdating(true);
      const response = await pokemonApi.getPokemons(pokemons.length, LIMIT);
      const request = response.results.map((item) => {
        return pokemonApi.getById(item.name);
      });
      const data = await Promise.all(request);
      dispatch(pokeSliceActions.addPokemons(data));
      setIsUpdating(false);
    }
  };

  const onRefresh = async () => {
    setIsRefreshing(true);
    const response = await pokemonApi.getPokemons();
    const request = response.results.map((item) => {
      return pokemonApi.getById(item.name);
    });
    const pokemons = await Promise.all(request);
    setIsRefreshing(false);
    dispatch(pokeSliceActions.setPokemons(pokemons));
  };

  return {
    pokemons,
    isloading,
    onRefresh,
    isUpdating,
    isRefreshing,
    onEndReached,
  };
};

export default usePokemons;
