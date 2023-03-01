import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import appSlice from './slices/appSlice';

const rootSlice = combineReducers({
  userSlice,
  appSlice,
});

export default rootSlice;
