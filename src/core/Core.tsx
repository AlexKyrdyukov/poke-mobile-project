/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NotifierWrapper } from 'react-native-notifier';

import Navigation from 'src/navigation';

const Core: React.FC = () => {
  return (
    <NotifierWrapper>
      <Navigation />
    </NotifierWrapper>
  );
};

export default Core;
