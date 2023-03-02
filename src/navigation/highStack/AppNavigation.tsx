import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as nativeStack from '@react-navigation/native-stack';

import SignIn from 'src/ui/screens/SignIn';
import SignUp from 'src/ui/screens/SignUp';
import Home from 'src/ui/screens/Home/Home';
import MainList from 'src/ui/screens/MainList/MainList';
import UserAccount from 'src/ui/screens/UserAccount/UserAccount';

const Stack = nativeStack.createNativeStackNavigator();

const AppNavigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Group>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainList" component={MainList} />
        <Stack.Screen name="UserAccount" component={UserAccount} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
