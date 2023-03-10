import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import type { MediaType } from 'react-native-image-picker';

import { useUser } from 'src/hooks/useUser';
import { images } from 'src/consts/images';

import styles from './UserAvatar.styles';

const UserAvatar: React.FC = () => {
  const { savePhoto, user } = useUser();
  const cameraLaunch = async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'mixed' as MediaType,
      includeBase64: false,
    };
    await launchImageLibrary(options, savePhoto);
  };

  return (
    <View
      style={styles.componentContainer}
    >
      <View
        style={styles.imageContainer}
      >
        <Image
          style={styles.imageStyles}
          source={user?.avatar ? { uri: user?.avatar } : images.profile}
        />
      </View>
      <TouchableOpacity onPress={cameraLaunch} style={styles.button}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(UserAvatar);
