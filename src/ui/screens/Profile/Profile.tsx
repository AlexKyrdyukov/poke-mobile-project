import React from 'react';
import { View } from 'react-native';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Button from 'src/ui/components/Button';
import CheckBox from 'src/ui/components/CheckBox';
import UserAvatar from 'src/ui/screens/components/UserAvatar';

import { useUser } from 'src/hooks/useUser';
import useTheme from 'src/hooks/useTheme';

import styles from './Profile.styles';

type Props = NativeStackScreenProps<ParamListBase>;

const Profile: React.FC<Props> = (props) => {
  const { setThemeState, theme, checBoxState } = useTheme();
  const { remove, logOut } = useUser();
  const { navigation } = props;

  return (
    <View style={styles({ theme }).sectionContainer}>
      <UserAvatar />
      <Button
        onPress={remove}
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonSignInContainer}
        textStyle={styles({ theme }).buttonSignInText}
        title="delete user"
      />
      <Button
        onPress={logOut}
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonSignInContainer}
        textStyle={styles({ theme }).buttonSignInText}
        title="log out"
      />
      <Button
        onPress={() => navigation.navigate('ChangePassword')}
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonSignInContainer}
        textStyle={styles({ theme }).buttonSignInText}
        title="change password"
      />
      <CheckBox
        containerCheckBoxStyle={styles({ theme }).checkBoxStyle}
        onPress={setThemeState}
        text="change theme"
        label={theme}
        checkBoxState={checBoxState}
      />
    </View>
  );
};

export default React.memo(Profile);
