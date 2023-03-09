import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'src/ui/screens/Home';
import Profile from 'src/ui/screens/Profile';
import MainList from 'src/ui/screens/MainList';

import HomeLogo from 'src/images/home.svg';
import ListLogo from 'src/images/list.svg';
import ProfileLogo from 'src/images/profile.svg';

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeLogo name="Home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MainList}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <ListLogo name="List" color={color} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <ProfileLogo name="Profile" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

// import React from 'react';
// import { Image } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import type { ImageSourcePropType } from 'react-native';

// import Home from 'src/ui/screens/Home';
// import Profile from 'src/ui/screens/Profile';
// import MainList from 'src/ui/screens/MainList';

// import HomeLogo from 'src/images/home.svg';
// import ListLogo from 'src/images/list.svg';
// import ProfileLogo from 'src/images/profile.svg';

// import home from 'src/images/home.png';
// import list from 'src/images/list.png';
// import profile from 'src/images/profile.png';

// const Tab = createBottomTabNavigator();

// const TabNavigation: React.FC = () => {
//   return (
//     <Tab.Navigator
//       // screenOptions={({ route }) => ({
//       //   tabBarIcon: () => {
//       //     const icons: Record<string, ImageSourcePropType> = {
//       //       Home: home,
//       //       Profile: profile,
//       //       MainList: list,
//       //     };
//       //     return <Image source={icons[route.name]} />;
//       //   },
//       //   tabBarActiveTintColor: 'tomato',
//       //   tabBarInactiveTintColor: 'gray',
//       // })}
//       screenOptions={{
//         tabBarVisible: false,
//       }}
//     >
//       <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
//       <Tab.Screen name="MainList" options={{ headerShown: false }} component={MainList} />
//       <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
//     </Tab.Navigator>
//   );
// };

// export default React.memo(TabNavigation);
