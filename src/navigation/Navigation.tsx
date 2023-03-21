import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from 'src/navigation/AuthStack';
import RootStack from 'src/navigation/RootStack';
import useUser from 'src/hooks/useUser';
import Loader from './Loader';

const AppNavigation: React.FC = () => {
  const { user, isSuccesful } = useUser();
  return (
    isSuccesful
      ? (
        <NavigationContainer>
          {user ? <RootStack /> : <AuthStack />}
        </NavigationContainer>)
      : (<Loader />)
  );
};

export default AppNavigation;
