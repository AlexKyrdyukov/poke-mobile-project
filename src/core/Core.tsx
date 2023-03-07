/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppNavigation from 'src/navigation';
import { userHelper } from 'src/utils';
import { useAppDispatch } from 'src/store';
import { userSliceActions } from 'src/store/slices/userSlice';

const Core: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    (async () => {
      try {
        const user = await userHelper.getCurrent();
        dispatch(userSliceActions.setUser(user));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);
  return (
    <AppNavigation />
  );
};

export default Core;
