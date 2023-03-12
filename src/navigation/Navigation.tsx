import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from 'src/navigation/AuthStack';
import RootStack from 'src/navigation/RootStack';

import useUser from 'src/hooks/useUser';

const AppNavigation: React.FC = () => {
  const { user } = useUser();

  return (
    <NavigationContainer>
      {user ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default AppNavigation;
