import React from 'react';
import { View, Image, PermissionsAndroid } from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import type { MediaType } from 'react-native-image-picker';

import Button from 'src/ui/components/Button/Button';
import useUser from 'src/hooks/useUser';
import useTheme from 'src/hooks/useTheme';

import Profile from 'src/assets/icons/profile.svg';

import styles from './UserAvatar.styles';

const UserAvatar: React.FC = () => {
  const { savePhoto, user } = useUser();
  const { theme } = useTheme();
  const getFromGalery = async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'mixed' as MediaType,
      includeBase64: false,
    };
    await launchImageLibrary(options, savePhoto);
  };
  const createCamera = async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'mixed' as MediaType,
      includeBase64: false,
    };
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      await launchCamera(options, savePhoto);
    } catch (err) {
      console.warn(err);
    }
  };

  const isString = (image: string | null | undefined): image is string => {
    return (image as string)?.length !== undefined;
  };

  return (
    <View
      style={styles({ theme }).componentContainer}
    >
      <View
        style={styles({ theme }).imageContainer}
      >
        {isString(user?.avatar)
          ? (<Image
            style={styles({ theme }).imageStyles}
            source={{ uri: user?.avatar }}
          />)
          : <Profile width={100} height={100} />
        }
      </View>
      <View
        style={styles({ theme }).buttonContainer}
      >
        <Button
          containerStyle={styles({ theme }).buttonSignUpContainer}
          textStyle={styles({ theme }).buttonSignUpText}
          onPress={getFromGalery}
          activeOpacity={0.8}
          title="select photo"
        />
        <Button
          containerStyle={styles({ theme }).buttonSignUpContainer}
          textStyle={styles({ theme }).buttonSignUpText}
          onPress={createCamera}
          activeOpacity={0.8}
          title="create photo"
        />
      </View>
    </View>
  );
};

export default React.memo(UserAvatar);
