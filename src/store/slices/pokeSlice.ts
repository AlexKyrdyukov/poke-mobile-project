import { createSlice } from '@reduxjs/toolkit';

export type Pokemons = {
  pokemons: [];
};

const initialState = {
  pokemons: null as Pokemons | null,
};

export const pokeSlice = createSlice({
  name: 'pokeSlice',
  initialState,
  reducers: {},
});

export const pokeSliceActions = pokeSlice.actions;
export default pokeSlice.reducer;
