import React from 'react';
import { appSliceActions } from 'src/store/slices/appSlice';
import { useAppDispatch, useAppSelector } from 'src/store/store';
import storage from 'src/utils/AsyncStorageHelper';

const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(({ rootSlice }) => rootSlice.appSlice.theme);

  React.useEffect(() => {
    (async () => {
      const sessionEmail = await storage.sessionEmail.get();
      if (!sessionEmail) {
        return;
      }
      const theme = await storage.themeApp.get(sessionEmail);
      if (!theme) {
        return dispatch(appSliceActions.setTheme('light'));
      }
      dispatch(appSliceActions.setTheme(theme));
    })();
  }, [theme, dispatch]);

  const checkBoxState = theme === 'light';

  const setThemeState = async () => {
    const sessionEmail = await storage.sessionEmail.get();
    if (!sessionEmail) {
      return;
    }
    if (!checkBoxState) {
      storage.themeApp.set('light', sessionEmail);
      return dispatch(appSliceActions.setTheme('light'));
    }
    storage.themeApp.set('dark', sessionEmail);
    return dispatch(appSliceActions.setTheme('dark'));
  };
  return {
    theme,
    checkBoxState,
    setThemeState,
  };
};

export default useTheme;
