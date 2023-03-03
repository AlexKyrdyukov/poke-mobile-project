/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';

import AppNavigation from 'src/navigation/highStack';

const Core: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>

  );
};

export default Core;
