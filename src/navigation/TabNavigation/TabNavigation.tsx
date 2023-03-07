import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { ImageSourcePropType } from 'react-native';

import Home from 'src/ui/screens/Home';
import MainList from 'src/ui/screens/MainList';
import Profile from 'src/ui/screens/Profile';

import home from 'src/ui/images/home.png';
import list from 'src/ui/images/list.png';
import profile from 'src/ui/images/profile.png';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const icons: Record<string, ImageSourcePropType> = {
            Home: home,
            Profile: profile,
            MainList: list,
          };
          return <Image source={icons[route.name]} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MainList" component={MainList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default React.memo(TabNavigation);
