import axiosInstance from './axios';

type PokemonLink = {
  name: string;
  url: string;
};

type StatisticList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonLink[];
};

type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprities: Sprities;
};

type Sprities = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

const getPokemons = async (offset: string, limit: string) => {
  const response = await axiosInstance.get<StatisticList>('/pokemon', { params: { limit, offset } });
  return response;
};

const getById = async (pokemonId: number) => {
  const response = await axiosInstance.get<Pokemon>(`/pokemon/${pokemonId}`);
  return response;
};

export default {
  getById,
  getPokemons,
};
