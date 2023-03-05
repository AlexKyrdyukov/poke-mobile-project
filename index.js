/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Core from 'src/core';
import { store } from 'src/store';
import { name as appName } from './app.json';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <Core />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
