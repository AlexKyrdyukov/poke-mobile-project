import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from 'src/navigation/authStack';
import RootStack from 'src/navigation/rootStack';
import { useAppSelector } from 'src/store/store';

const AppNavigation: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  return (
    <NavigationContainer>
      {user ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default AppNavigation;
