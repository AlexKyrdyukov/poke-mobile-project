import { appSliceActions } from 'src/store/slices/appSlice';
import { useAppDispatch, useAppSelector } from 'src/store/store';

const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(({ rootSlice }) => rootSlice.appSlice.theme);
  const checBoxState = theme === 'light';
  const setThemeState = () => {
    if (theme !== 'light') {
      return dispatch(appSliceActions.setTheme('light'));
    }
    return dispatch(appSliceActions.setTheme('dark'));
  };
  return {
    theme,
    checBoxState,
    setThemeState,
  };
};

export default useTheme;
