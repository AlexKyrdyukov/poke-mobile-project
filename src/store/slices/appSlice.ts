import { createSlice } from '@reduxjs/toolkit';

export type App = {
  appState: boolean;
  total: number;
  offset: number;
  limit: number;
  theme: 'light' | 'dark' | null;
};

const initialState = {
  app: null as App | null,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {},
});

export const appSliceActions = appSlice.actions;
export default appSlice.reducer;
