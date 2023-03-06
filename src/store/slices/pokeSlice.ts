import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Pokemon } from 'src/types/pokemon';

const initialState = {
  pokemons: null as Pokemon[] | null,
};

export const pokeSlice = createSlice({
  name: 'pokeSlice',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<Pokemon[]>) {
      console.log(action.payload);
      state.pokemons = action.payload;
    },
    addPokemons(state, action) {
      console.log(action.payload);

      if (state.pokemons) {
        state.pokemons = [...state.pokemons, ...action.payload];
      }
    },
  },
});

export const pokeSliceActions = pokeSlice.actions;
export default pokeSlice.reducer;
