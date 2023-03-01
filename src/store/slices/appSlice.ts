import { createSlice } from '@reduxjs/toolkit';

export type AppType = {
  appState: boolean;
  total: number;
  offset: number;
  limit: number;
  theme: 'light' | 'dark' | null;
};

const getInitialState = () => ({
  app: null as AppType | null,
});

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: getInitialState,
  reducers: {},
});

export const appSliceActions = appSlice.actions;
export default appSlice.reducer;
