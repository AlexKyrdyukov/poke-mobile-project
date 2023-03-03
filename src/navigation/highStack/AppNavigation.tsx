import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as nativeStack from '@react-navigation/native-stack';

import SignIn from 'src/ui/screens/SignIn';
import SignUp from 'src/ui/screens/SignUp';
import Home from 'src/ui/screens/Home';
import MainList from 'src/ui/screens/MainList';
import UserAccount from 'src/ui/screens/UserAccount';

import { useAppDispatch, useAppSelector } from 'src/store/store';

const Stack = nativeStack.createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {!user &&
          (
            <Stack.Group>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Group>
          )}
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MainList" component={MainList} />
          <Stack.Screen name="UserAccount" component={UserAccount} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
