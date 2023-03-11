import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'src/ui/screens/Home';
import Profile from 'src/ui/screens/Profile';
import MainList from 'src/ui/screens/MainList';
import CustomTabBar from 'src/navigation/CustomTabBar';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MainList" component={MainList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default React.memo(TabNavigation);
