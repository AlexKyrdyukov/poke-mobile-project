import { createSlice } from '@reduxjs/toolkit';
import type { User } from 'src/types/user';

const initialState = {
  user: null as User | null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
    setAvatar(state, action) {
      if (state.user) {
        state.user.avatar = action.payload;
      }
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
