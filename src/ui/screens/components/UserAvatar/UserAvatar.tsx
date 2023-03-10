import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { launchCamera } from 'react-native-image-picker';
import Button from 'src/ui/components/Button';

import { images } from 'src/consts/images';

import styles from './UserAvatar.styles';

const UserAvatar: React.FC = () => {
  const [isSelected, setSelection] = React.useState(false);
  const [resoursePath, setResoursePath] = React.useState({});
  const cameraLaunch = async () => {
    const options = {
      selectionLimit: 1,
      // mediaType: ,
      includeBase64: false,
    };
    const result = await launchCamera(options);
    console.log(result);
  }
  return (
    <View
      style={styles.componentContainer}
    >
      <View
        style={styles.imageContainer}
      >
        <Image
          style={styles.imageStyles}
          source={images.profile}
        />
      </View>
      <TouchableOpacity onPress={cameraLaunch} style={styles.button}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(UserAvatar);
