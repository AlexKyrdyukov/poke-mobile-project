import React from 'react';
import type { ImagePickerResponse } from 'react-native-image-picker';
import { Notifier, NotifierComponents } from 'react-native-notifier';
import { useAppDispatch, useAppSelector } from 'src/store';
import { AxiosError } from 'axios';
import { userSliceActions } from 'src/store/slices/userSlice';

import storage from 'src/utils/AsyncStorageHelper';
import userApi from 'src/api/serverApi/userApi';

const useAvatar = () => {
  const dispatch = useAppDispatch();
  const [isSuccesful, setIsSuccessFul] = React.useState(false);
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);

  const savePhoto = async (imageData: ImagePickerResponse) => {
    setIsSuccessFul(true);
    try {
      const { assets } = imageData;
      if (!assets?.length) {
        return;
      }
      const [file] = assets;
      const { uri } = file;
      if (!user || !uri) {
        return;
      }
      const response = await userApi.setAvatar(user.userId, uri);
      dispatch(userSliceActions.setUser(response));
      Notifier.showNotification({
        title: 'The request was success',
        description: 'avatat was success loaded',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success',
        },
      });
      setIsSuccessFul(false);
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        Notifier.showNotification({
          title: 'erorr',
          description: error.message,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
      }
    }
  };

  const deletePhoto = async () => {
    try {
      setIsSuccessFul(true);
      const sessionEmail = await storage.sessionEmail.get();
      if (!sessionEmail) {
        Notifier.showNotification({
          title: 'The request was failed',
          description: 'unknown error',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
        return;
      }
      // const user = await storage.user.get(sessionEmail);
      if (!user) {
        Notifier.showNotification({
          title: 'The request was failed',
          description: 'unknown error',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
        return;
      }
      delete user.avatar;
      dispatch(userSliceActions.setUser(user));
      // await storage.user.set(user, sessionEmail);
      setIsSuccessFul(false);
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        Notifier.showNotification({
          title: 'erorr',
          description: error.message,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
      }
    }
  };
  return {
    user,
    isSuccesful,
    savePhoto,
    deletePhoto,
  };
};

export default useAvatar;
