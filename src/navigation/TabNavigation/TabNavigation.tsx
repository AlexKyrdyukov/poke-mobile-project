import React from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'src/ui/screens/Home';
import Profile from 'src/ui/screens/Profile';
import MainList from 'src/ui/screens/MainList';

import HomeLogo from 'src/images/home.svg';
import ListLogo from 'src/images/list.svg';
import ProfileLogo from 'src/images/profile.svg';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-svg';

const Tab = createBottomTabNavigator();

type Props = BottomTabBarProps;
type Route = {
  key: string;
  name: string;
  params: undefined | Record<string, string>;
};

const MyTabBar: React.FC<Props> = ({ state, descriptors, navigation, ...props }) => {
  console.log(state, descriptors, navigation, props);

  
  return (
    <View>
      <TouchableOpacity
        accessibilityRole="button"
        // accessibilityState={isFocused ? { selected: true } : {}}
        // accessibilityLabel={options.tabBarAccessibilityLabel}
        // testID={options.tabBarTestID}
        onPress={() => navigation.navigate('Home')}
        // onLongPress={onLongPress}
        // eslint-disable-next-line no-inline-styles/no-inline-styles
        style={{ flex: 1 }}
      >
        <HomeLogo style={{ color: isFocused ? '#673ab7' : '#222' }} />
          {label}
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1 }}
      >
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          {label}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ flex: 1 }}
      >
        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MainList" component={MainList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default React.memo(TabNavigation);
