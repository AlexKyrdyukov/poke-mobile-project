import React from 'react';

export const useTheme = () => {
  const [themeState, setThemeState] = React.useState(true);
  return {
    themeState,
    setThemeState,
  };
};
