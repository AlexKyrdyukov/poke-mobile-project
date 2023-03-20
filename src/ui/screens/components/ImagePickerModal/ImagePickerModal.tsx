import React from 'react';
import { Text, SafeAreaView, Pressable } from 'react-native';

import Modal from 'react-native-modal';

import useUser from 'src/hooks/useUser';

import useTheme from 'src/hooks/useTheme';
import Camera from 'src/assets/icons/camera.svg';
import Gallery from 'src/assets/icons/gallery.svg';
import CardDelete from 'src/assets/icons/card_delete.svg';

import styles from './ImagePickerModal.style';

type Props = {
  onClose: () => void;
  onImageLibraryPress: () => void;
  onCameraPress: () => void;
  onDeletePhoto: () => void;
  isVisible: boolean;
};

const ImagePickerModal: React.FC<Props> = ({
  onClose,
  isVisible,
  onImageLibraryPress,
  onCameraPress,
  onDeletePhoto,
}) => {
  const { theme } = useTheme();
  const { user } = useUser();
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles({ theme }).modal}
    >
      <SafeAreaView
        style={styles({ theme }).buttons}
      >
        <Pressable
          style={styles({ theme }).button}
          onPress={onImageLibraryPress}
        >
          <Gallery height={40} width={40} />
          <Text style={styles({ theme }).buttonText}>Library</Text>
        </Pressable>
        {user?.avatar &&
          (
            <Pressable
              style={styles({ theme }).button}
              onPress={onDeletePhoto}
            >
              <CardDelete height={40} width={40} />
              <Text style={styles({ theme }).buttonText}>Delete</Text>
            </Pressable>)
        }
        <Pressable style={styles({ theme }).button} onPress={onCameraPress}>
          <Camera height={40} width={40} />
          <Text style={styles({ theme }).buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

export default ImagePickerModal;
