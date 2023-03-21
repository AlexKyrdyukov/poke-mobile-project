import React from 'react';
import { View, Image, PermissionsAndroid, TouchableOpacity } from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import type { MediaType } from 'react-native-image-picker';

import ImagePickerModal from 'src/ui/screens/components/ImagePickerModal';
import useAvatar from 'src/hooks/useAvatar';
import useTheme from 'src/hooks/useTheme';
import colors from 'src/consts/colors';

import Profile from 'src/assets/icons/profile.svg';
import Plus from 'src/assets/icons/plus.svg';

import styles from './UserAvatar.styles';

const UserAvatar: React.FC = () => {
  const { savePhoto, isSuccesful, user, deletePhoto } = useAvatar();
  const { theme } = useTheme();
  const [isModalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    if (isSuccesful) {
      setModalVisible(!isSuccesful);
    }
  }, [isSuccesful]);

  const openModal = () => {
    setModalVisible(true);
  };

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
          : <Profile fill={colors.default.green} width={100} height={100} />
        }
        <TouchableOpacity
          style={styles({ theme }).buttonCameraStyle}
          onPress={openModal}
        >
          <Plus width={30} height={30} fill={colors.default.green} />
        </TouchableOpacity>
      </View>
      <ImagePickerModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onImageLibraryPress={getFromGalery}
        onCameraPress={createCamera}
        onDeletePhoto={deletePhoto}
      />
    </View>
  );
};

export default React.memo(UserAvatar);
