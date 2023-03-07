import React from 'react';
import * as nativeStack from '@react-navigation/native-stack';

import TabNavigation from 'src/navigation/TabNavigation';
import DetailItem from 'src/ui/screens/DetailItem';
import ChangePassword from 'src/ui/screens/ChangePassword';

type RootStackParamList = {
  Root: undefined;
  TabNavigation: undefined;
  DetailItem: { name: string};
  ChangePassword: undefined;
};

const Stack = nativeStack.createNativeStackNavigator<RootStackParamList>();
const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="DetailItem" component={DetailItem} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
