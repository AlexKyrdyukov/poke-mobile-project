import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as nativeStack from '@react-navigation/native-stack';

const Stack = nativeStack.createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Feed() {
  return <Text>Feed!</Text>;
}

function Messages() {
  return <Text>Messages!</Text>;
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

function Profile() {
  return <Text>Profile!</Text>;
}

function Settings() {
  return <Text>Settings!</Text>;
}

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
  );
}

export default App;
