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
        tabBarItemStyle: { borderRightWidth: 1, borderRightColor: 'red' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: {
            // backgroundColor: 'red',
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <HomeLogo fill={focused ? color : 'white'} width={20} height={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={MainList}
        options={{
          tabBarStyle: {
            // backgroundColor: 'blue',
          },
          tabBarLabel: 'List',
          tabBarIcon: ({ focused, color, size }) => (
            <ListLogo fill={focused ? color : 'white'} width={20} height={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: {
            // backgroundColor: 'green',
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <ProfileLogo fill={focused ? color : 'white'} stroke="red" width={20} height={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
