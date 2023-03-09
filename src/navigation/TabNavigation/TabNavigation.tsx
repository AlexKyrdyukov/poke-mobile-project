import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'src/ui/screens/Home';
import Profile from 'src/ui/screens/Profile';
import MainList from 'src/ui/screens/MainList';

import HomeLogo from 'src/images/home.svg';
import ListLogo from 'src/images/list.svg';
import ProfileLogo from 'src/images/profile.svg';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff5ee',
        tabBarActiveBackgroundColor: '#fa8072',
        tabBarItemStyle: {
          borderRadius: 20,
          borderStartWidth: 2,
          borderWidth: 1,
          borderColor: '#191970',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: {
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <HomeLogo fill={focused ? color : '#00ff00'} width={20} height={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MainList}
        options={{
          tabBarStyle: {
          },
          tabBarLabel: 'List',
          tabBarIcon: ({ focused, color }) => (
            <ListLogo fill={focused ? color : '#da70d6'} width={20} height={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: {
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <ProfileLogo fill={focused ? color : '#00ffff'} stroke="red" width={20} height={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default React.memo(TabNavigation);
