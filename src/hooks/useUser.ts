import { AxiosError } from 'axios';
import React from 'react';
import { Notifier, NotifierComponents } from 'react-native-notifier';
import authApi from 'src/api/serverApi/authApi';
import userApi from 'src/api/serverApi/userApi';

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
    console.log(user, Boolean(user));
    if (!user) {
      (async () => {
        try {
          const sessionEmail = await storage.sessionEmail.get();
          if (!sessionEmail) {
            setIsSuccessFul(true);
            console.log(sessionEmail);
            return;
          }
          console.log(sessionEmail)
          const user = await authApi.getMe();

          dispatch(userSliceActions.setUser(user));
        } catch (error) {
          console.error(error);
        }
        setIsSuccessFul(true);
      })();
      return () => {
        setIsSuccessFul(false);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const signIn = async (data: SignInData) => {
    try {
      await storage.sessionEmail.set(data.email);
      const { user, accessToken, refreshToken } = await authApi.signIn(data);
      await storage.tokens.set(`${accessToken}, ${refreshToken}`, user.email);
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
          description: error.response?.data.message,
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
      await storage.sessionEmail.set(enteredData.email);
      const { repeatPassword, ...data } = enteredData;
      const { user, accessToken, refreshToken } = await authApi.signUp(data);
      await storage.tokens.set(`${accessToken}, ${refreshToken}`, user.email);

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
          description: error.response?.data.message,
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
      await userApi.deleteUser(user?.userId);
      await storage.deviceId.remove(user?.email);
      await storage.tokens.remove(user?.email);
      console.log(await storage.sessionEmail.get());
      await storage.sessionEmail.remove();
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
          description: error.response?.data.message,
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
      await storage.tokens.remove(user?.email);
      await storage.sessionEmail.remove();
      dispatch(userSliceActions.removeUser());
      const em = await storage.sessionEmail.get();
      // eslint-disable-next-line no-console
      console.log(em);
    } catch (error) {
      if (error instanceof AxiosError) {
        Notifier.showNotification({
          title: 'erorr',
          description: error.response?.data.message,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
      }
      console.error(error);
    }
  };

  const changePassword = async (data: PasswordsData) => {
    try {
      setIsSuccessFul(false);
      const { confirmNewPassword, ...newData } = data;
      await userApi.changePassword(user?.userId, newData);
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
      if (error instanceof AxiosError) {
        Notifier.showNotification({
          title: 'erorr',
          description: error.response?.data.message,
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
      const response = await userApi.changeData(user?.userId, data);
      dispatch(userSliceActions.updateUser(response));
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
          description: error.response?.data.message,
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
    isSuccesful,
    changeData,
    changePassword,
    setIsSuccessFul,
  };
};

export default useUser;
