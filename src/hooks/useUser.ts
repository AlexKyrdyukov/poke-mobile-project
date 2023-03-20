import { AxiosError } from 'axios';
import React from 'react';
import type { ImagePickerResponse } from 'react-native-image-picker';
import { Notifier, NotifierComponents } from 'react-native-notifier';
import authApi from 'src/api/serverApi/authApi';

import { useAppDispatch, useAppSelector } from 'src/store';
import { userSliceActions } from 'src/store/slices/userSlice';
import storage from 'src/utils/AsyncStorageHelper';

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  email: string;
  password: string;
  repeatPassword?: string;
};

type PasswordsData = {
  password: string;
  newPassword: string;
  confirmNewPassword?: string;
};

type UserData = {
  email: string;
  fullName: string;
};

const useUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ rootSlice }) => rootSlice.userSlice.user);
  const [isSuccesful, setIsSuccessFul] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const sessionEmail = await storage.sessionEmail.get();
        if (!sessionEmail) {
          return null;
        }
        const user = await authApi.getMe();
        dispatch(userSliceActions.setUser(user));
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      setIsSuccessFul(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const signIn = async (data: SignInData) => {
    try {
      // const { email, password } = data;
      // const userStorage = await storage.user.get(email);

      // if (!userStorage) {
      //   Notifier.showNotification({
      //     title: 'The request was failed',
      //     description: 'user not found',
      //     Component: NotifierComponents.Alert,
      //     componentProps: {
      //       alertType: 'error',
      //     },
      //   });
      //   return;
      // }
      // if (password !== userStorage.password) {
      //   Notifier.showNotification({
      //     title: 'The request was failed',
      //     description: 'Entered password invalid',
      //     Component: NotifierComponents.Alert,
      //     componentProps: {
      //       alertType: 'error',
      //     },
      //   });
      //   return;
      // }

      // const user: Partial<typeof userStorage> = userStorage;
      // delete user.password;
      const { user, accessToken, refreshToken } = await authApi.signIn(data);
      await storage.tokens.set(`${accessToken}, ${refreshToken}`, user.email);
      await storage.sessionEmail.set(user.email);
      dispatch(userSliceActions.setUser(user));
      Notifier.showNotification({
        title: 'The request was success',
        description: 'Welcome in PokemonGo',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success',
        },
      });
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

  const signUp = async (enteredData: SignUpData) => {
    try {
      // const data = enteredData;
      // const { email } = data;
      // const existenceUser = await storage.user.get(email);

      // if (existenceUser) {
      //   Notifier.showNotification({
      //     title: 'The request was failed',
      //     description: 'user with this email already exist',
      //     Component: NotifierComponents.Alert,
      //     componentProps: {
      //       alertType: 'error',
      //     },
      //   });
      //   return;
      // }

      // delete data.repeatPassword;
      // await storage.user.set(data, email);
      // await storage.sessionEmail.set(email);

      // const user: Partial<typeof data> = data;
      // delete user.password;
      const { user, accessToken, refreshToken } = await authApi.signUp(enteredData);
      await storage.tokens.set(`${accessToken}, ${refreshToken}`, user.email);
      dispatch(userSliceActions.setUser(user));
      await storage.sessionEmail.set(user.email);
      Notifier.showNotification({
        title: 'The request was success',
        description: 'Welcome in PokemonGo',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success',
        },
      });
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

  const remove = async () => {
    try {
      const currentEmail = await storage.sessionEmail.get();
      if (!currentEmail) {
        Notifier.showNotification({
          title: 'The request was success',
          description: 'unknown error repeat request',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
        return;
      }
      await storage.user.remove(currentEmail);
      dispatch(userSliceActions.removeUser());
      Notifier.showNotification({
        title: 'The request was success',
        description: 'User success deleted',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success',
        },
      });
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

  const logOut = async () => {
    try {
      await storage.sessionEmail.remove();
      dispatch(userSliceActions.removeUser());
    } catch (error) {
      Notifier.showNotification({
        title: 'The request was failed',
        description: 'unknown error repeat request',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error',
        },
      });
      console.error(error);
    }
  };

  const changePassword = async (data: PasswordsData) => {
    try {
      const { password, newPassword } = data;
      const currentEmail = await storage.sessionEmail.get();

      if (!currentEmail) {
        Notifier.showNotification({
          title: 'The request was failed',
          description: 'unknown error repeat request and check entered data',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
        return;
      }

      const user = await storage.user.get(currentEmail);
      if (!user) {
        Notifier.showNotification({
          title: 'The request was failed',
          description: 'user not found',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
        return;
      }
      if (password !== user.password) {
        Notifier.showNotification({
          title: 'The request was failed',
          description: 'enteres password invalid',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
        return;
      }

      const newUser = {
        ...user,
        password: newPassword,
      };
      await storage.user.update(currentEmail, newUser);
      Notifier.showNotification({
        title: 'The request was success',
        description: 'password was success updated',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success',
        },
      });
      setIsSuccessFul(true);
    } catch (error) {
      console.error(error);
    }
  };

  const savePhoto = async (response: ImagePickerResponse) => {
    setIsSuccessFul(true);
    try {
      const { assets } = response;
      if (!assets?.length) {
        return;
      }
      const [file] = assets;
      const { uri } = file;
      if (!user) {
        return;
      }
      const userStorage = await storage.user.get(user.email);
      if (!userStorage) {
        return;
      }
      const savedUser = {
        ...userStorage,
        avatar: uri,
      };
      await storage.user.update(user.email, savedUser);
      dispatch(userSliceActions.setUser(savedUser));
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
      const user = await storage.user.get(sessionEmail);
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
      await storage.user.set(user, sessionEmail);
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

  const changeData = async (data: UserData) => {
    try {
      const currentEmail = await storage.sessionEmail.get();
      if (!currentEmail) {
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
      const user = await storage.user.get(currentEmail);
      if (!user) {
        return;
      }
      const updateUser = {
        ...user,
        ...data,
      };
      await storage.user.set(updateUser, data.email);
      await storage.sessionEmail.set(data.email);

      Notifier.showNotification({
        title: 'The request was success',
        description: 'data was success updated',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success',
        },
      });
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
    signIn,
    signUp,
    remove,
    logOut,
    savePhoto,
    isSuccesful,
    changeData,
    deletePhoto,
    changePassword,
    setIsSuccessFul,
  };
};

export default useUser;
