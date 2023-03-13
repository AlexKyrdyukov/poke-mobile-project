import React from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';

import type { ModalProps } from 'react-native-modal';
import Modal from 'react-native-modal';
import Button from 'src/ui/components/Button';

import useTheme from 'src/hooks/useTheme';
import Camera from 'src/assets/icons/camera.svg';
import Gallery from 'src/assets/icons/gallery.svg';
import styles from './ImagePickerModal.style';

type Props = ModalProps;

const ImagePickerModal: React.FC<Props> = ({ }) => {
  const { theme } = useTheme();
  return (
    <Modal isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles({ theme }).modal}
    >
      <SafeAreaView style={styles({ theme }).buttons}>
        <Pressable style={styles({ theme }).button} onPress={onImageLibraryPress}>
          <Gallery height={40} width={40} />
          <Text style={styles({ theme }).buttonText}>Library</Text>
        </Pressable>
        <Pressable style={styles({ theme }).button} onPress={onCameraPress}>
          <Camera height={40} width={40} />
          <Text style={styles({ theme }).buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

export default ImagePickerModal;
