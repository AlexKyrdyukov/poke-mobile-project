import React from 'react';
import { View, Text, Image, PermissionsAndroid, TouchableOpacity } from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import type { MediaType } from 'react-native-image-picker';

import Button from 'src/ui/components/Button';
import ImagePickerModal from 'src/ui/screens/components/ImagePickerModal';
import useUser from 'src/hooks/useUser';
import useTheme from 'src/hooks/useTheme';
import colors from 'src/consts/colors';

import Profile from 'src/assets/icons/profile.svg';
import Plus from 'src/assets/icons/plus.svg';

import styles from './UserAvatar.styles';

const UserAvatar: React.FC = () => {
  const { savePhoto, user } = useUser();
  const { theme } = useTheme();
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getFromGalery = async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo' as MediaType,
      includeBase64: false,
    };
    await launchImageLibrary(options, savePhoto);
  };

  const createCamera = async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo' as MediaType,
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
          : <Profile fill={colors.default.green} width={100} height={100} />
        }
        <TouchableOpacity
          style={styles({ theme }).buttonCameraStyle}
          onPress={toggleModal}
        >
          <Plus width={30} height={30} fill={colors.default.green} />
        </TouchableOpacity>
      </View>
      <View
        style={styles({ theme }).buttonContainer}
      >
        <Button
          containerStyle={styles({ theme }).buttonContainer}
          textStyle={styles({ theme }).buttonText}
          onPress={getFromGalery}
          activeOpacity={0.8}
          title="select photo"
        />
        <Button
          containerStyle={styles({ theme }).buttonContainer}
          textStyle={styles({ theme }).buttonText}
          onPress={createCamera}
          activeOpacity={0.8}
          title="create photo"
        />
      </View>
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
};

export default React.memo(UserAvatar);
