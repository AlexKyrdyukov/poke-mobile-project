// import React from 'react';
// import { View, Text } from 'react-native';

// import type { ParamListBase } from '@react-navigation/native';
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// import Button from 'src/ui/components/Button';

// import { userHelper } from 'src/utils';
// import { useAppDispatch } from 'src/store';
// import { userSliceActions } from 'src/store/slices/userSlice';

// import styles from './Profile.styles';

// type Props = NativeStackScreenProps<ParamListBase>;

// const Profile: React.FC<Props> = (props) => {
//   const { navigation } = props;
//   const dispatch = useAppDispatch();
//   // eslint-disable-next-line no-console
//   console.log(props);
//   const handleRemoveUser = async () => {
//     try {
//       await userHelper.remove();
//       dispatch(userSliceActions.removeUser());
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLogOutUser = async () => {
//     try {
//       await userHelper.logOut();
//       dispatch(userSliceActions.removeUser());
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.sectionContainer}>
//       <Text>UserAccount</Text>
//       <Button
//         onPress={handleRemoveUser}
//         activeOpacity={0.8}
//         containerStyle={styles.buttonSignInContainer}
//         textStyle={styles.buttonSignInText}
//       >del user
//       </Button>
//       <Button
//         onPress={handleLogOutUser}
//         activeOpacity={0.8}
//         containerStyle={styles.buttonSignInContainer}
//         textStyle={styles.buttonSignInText}
//       >log out
//       </Button>
//       <Button
//         onPress={() => navigation.navigate('ChangePassword')}
//         activeOpacity={0.8}
//         containerStyle={styles.buttonSignInContainer}
//         textStyle={styles.buttonSignInText}
//       >Change Password
//       </Button>
//     </View>
//   );
// };

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

// export default React.memo(Profile);
