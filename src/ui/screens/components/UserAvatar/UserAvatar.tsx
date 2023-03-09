import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { launchCamera } from 'react-native-image-picker';
import Button from 'src/ui/components/Button';

import { images } from 'src/consts/images';

import styles from './UserAvatar.styles';

const UserAvatar: React.FC = () => {
  const [isSelected, setSelection] = React.useState(false);
  const [resoursePath, setResoursePath] = React.useState({});
  // const cameraLaunch = () => {
  //   const options = {
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  // launchCamera(options, (res) => {
  //   // eslint-disable-next-line no-console
  //   console.log('Response = ', res);
  //   if (res.didCancel) {
  //     // eslint-disable-next-line no-console
  //     console.log('User cancelled image picker');
  //   } else if (res.error) {
  //     // eslint-disable-next-line no-console
  //     console.log('ImagePicker Error: ', res.error);
  //   } else if (res.customButton) {
  //     // eslint-disable-next-line no-console
  //     console.log('User tapped custom button: ', res.customButton);
  //     // eslint-disable-next-line no-console
  //     console.log(res.customButton);
  //   } else {
  //     const source = { uri: res.uri };
  //     // eslint-disable-next-line no-console
  //     console.log('response', JSON.stringify(res));
  //     setResoursePath({
  //       filePath: res,
  //       fileData: res.data,
  //       fileUri: res.uri
  //     });
  //   }
  // });
  // };
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
      {/* <TouchableOpacity onPress={cameraLaunch} style={styles.button}> */}
        {/* <Text style={styles.buttonText}>Select File</Text> */}
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default React.memo(UserAvatar);
