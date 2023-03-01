import { createSlice } from '@reduxjs/toolkit';

export type PokemonsType = {
  pokemons: [];
};

const getInitialState = () => ({
  pokemons: null as PokemonsType | null,
});

export const pokeSlice = createSlice({
  name: 'pokeSlice',
  initialState: getInitialState,
  reducers: {},
});

export const pokeSliceActions = pokeSlice.actions;
export default pokeSlice.reducer;
