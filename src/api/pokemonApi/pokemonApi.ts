import type { Pokemon } from 'src/types/pokemon';
import type { StatisticList } from 'src/types/statistic';
import axiosInstance from './axios';

const getPokemons = async (offset?: number, limit?: number) => {
  const response = await axiosInstance.get<StatisticList>('/pokemon', { params: { limit, offset } });
  return response.data;
};

const getById = async (pokemonName: string) => {
  const response = await axiosInstance.get<Pokemon>(`/pokemon/${pokemonName}`);
  return response.data;
};

export default {
  getById,
  getPokemons,
};
