import React from 'react';
import { View } from 'react-native';

import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Button from 'src/ui/components/Button';
import CheckBox from 'src/ui/components/CheckBox';
import UserAvatar from 'src/ui/screens/components/UserAvatar';

import useUser from 'src/hooks/useUser';
import useTheme from 'src/hooks/useTheme';

import styles from './Profile.styles';

type Props = NativeStackScreenProps<ParamListBase>;

const Profile: React.FC<Props> = (props) => {
  const { setThemeState, theme, checkBoxState } = useTheme();
  const { remove, logOut, deleteAllKeys } = useUser();
  const { navigation } = props;

  return (
    <View style={styles({ theme }).sectionContainer}>
      <UserAvatar />
      <View
        style={styles({ theme }).buttonsContainer}
      >
        <Button
          onPress={remove}
          activeOpacity={0.8}
          containerStyle={styles({ theme }).buttonContainer}
          textStyle={styles({ theme }).buttonText}
          title="delete user"
        />
        <Button
          onPress={logOut}
          activeOpacity={0.8}
          containerStyle={styles({ theme }).buttonContainer}
          textStyle={styles({ theme }).buttonText}
          title="log out"
        />
      </View>
      <Button
        onPress={() => navigation.navigate('ChangeUserData')}
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonContainer}
        textStyle={styles({ theme }).buttonText}
        title="change data"
      />
      <Button
        onPress={deleteAllKeys}
        activeOpacity={0.8}
        containerStyle={styles({ theme }).buttonContainer}
        textStyle={styles({ theme }).buttonText}
        title="delete all keys"
      />
      <CheckBox
        containerCheckBoxStyle={styles({ theme }).checkBoxStyle}
        onPress={setThemeState}
        text="change theme"
        label={theme}
        checkBoxState={checkBoxState}
      />
    </View>
  );
};

export default React.memo(Profile);
