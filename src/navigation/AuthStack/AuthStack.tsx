import React from 'react';
import * as nativeStack from '@react-navigation/native-stack';

import SignIn from 'src/ui/screens/SignIn';
import SignUp from 'src/ui/screens/SignUp';

const Stack = nativeStack.createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
    <Stack.Group>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
