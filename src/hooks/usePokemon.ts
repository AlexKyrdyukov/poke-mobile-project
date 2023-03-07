import React from 'react';
import type { Pokemon, Sprites } from 'src/types/pokemon';
import pokemonApi from 'src/api/pokemonApi';

export const usePokemon = (name: string) => {
  const [pokemon, setPokemon] = React.useState<Pokemon>();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const response = await pokemonApi.getById(name);
      setPokemon(response);
      setIsLoading(false);
    })();
  }, [name]);

  const getAllImage = (sprites: Sprites) => {
    const arr: string[] = [];

    const getLinks = (sprites: Sprites) => {
      Object.values(sprites).forEach((value) => {
        if (value instanceof Object) {
          return getLinks(value as Sprites);
        }
        if (value !== null && value.slice(-3) !== 'svg') {
          arr.push(value);
        }
      });
      return arr;
    };
    return getLinks(sprites);
  };

  const links = React.useMemo(() => {
    if (pokemon) {
      const { sprites } = pokemon;
      return getAllImage(sprites);
    }
  }, [pokemon]);

  return {
    isLoading,
    links,
    pokemon,
  };
};
