import React from 'react';
import { View, Text } from 'react-native';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Button from 'src/ui/components/Button';
import { useUser } from 'src/hooks/useUser';

import styles from './Profile.styles';

type Props = NativeStackScreenProps<ParamListBase>;

const Profile: React.FC<Props> = (props) => {
  const { remove, logOut } = useUser();
  const { navigation } = props;

  return (
    <View style={styles.sectionContainer}>
      <Text>UserAccount</Text>
      <Button
        onPress={remove}
        activeOpacity={0.8}
        containerStyle={styles.buttonSignInContainer}
        textStyle={styles.buttonSignInText}
      >del user
      </Button>
      <Button
        onPress={logOut}
        activeOpacity={0.8}
        containerStyle={styles.buttonSignInContainer}
        textStyle={styles.buttonSignInText}
      >log out
      </Button>
      <Button
        onPress={() => navigation.navigate('ChangePassword')}
        activeOpacity={0.8}
        containerStyle={styles.buttonSignInContainer}
        textStyle={styles.buttonSignInText}
      >Change Password
      </Button>
    </View>
  );
};

export default React.memo(Profile);
