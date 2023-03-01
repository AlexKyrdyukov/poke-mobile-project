import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as nativeStack from '@react-navigation/native-stack';

const SignUp = React.lazy(() => import('../../screens/SignUp'));
const SignIn = React.lazy(() => import('../../screens/SignIn'));

const Stack = nativeStack.createNativeStackNavigator();

const AppNavigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
