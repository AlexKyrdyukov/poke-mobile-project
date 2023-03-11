import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Application } from 'src/types/application';

const initialState: Application = {
  theme: 'light',
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Application['theme']>) {
      state.theme = action.payload;
    },
  },
});

export const appSliceActions = appSlice.actions;
export default appSlice.reducer;
