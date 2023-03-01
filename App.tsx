/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import AppNavigation from './src/ui/containers/AppNavigation/AppNavigation';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);
  return (
    <AppNavigation />
  );
};

export default App;
