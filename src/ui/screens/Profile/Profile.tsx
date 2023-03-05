import React from 'react';
import { View, Text } from 'react-native';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Button from 'src/ui/components/Button';

import { userHelper } from 'src/utils';
import { useAppDispatch } from 'src/store';
import { userSliceActions } from 'src/store/slices/userSlice';

import style from './Profile.style';

type Props = NativeStackScreenProps<ParamListBase>;

const Profile: React.FC<Props> = (props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  // eslint-disable-next-line no-console
  console.log(props);
  const handleRemoveUser = async () => {
    try {
      await userHelper.remove();
      dispatch(userSliceActions.removeUser());
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogOutUser = async () => {
    try {
      await userHelper.logOut();
      dispatch(userSliceActions.removeUser());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={style.sectionContainer}>
      <Text>UserAccount</Text>
      <Button
        onPress={handleRemoveUser}
        opacity={0.7}
        styles={[{ color: 'red' }]}
      >del user
      </Button>
      <Button
        onPress={handleLogOutUser}
        opacity={0.7}

        styles={[{ color: 'red' }]}
      >log out
      </Button>
      <Button
        onPress={() => navigation.navigate('ChangePassword')}
        opacity={0.7}

        styles={[{ color: 'red' }]}
      >Change Password
      </Button>
    </View>
  );
};

export default React.memo(Profile);
