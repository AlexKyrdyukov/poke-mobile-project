import React from 'react';
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

export const useUser = () => {
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
        const user = await storage.user.get(sessionEmail);
        dispatch(userSliceActions.setUser(user));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  const signIn = async (data: SignInData) => {
    try {
      const { email, password } = data;
      const userStorage = await storage.user.get(email);

      if (!userStorage) {
        throw new Error('user not found');
      }
      if (password !== userStorage.password) {
        throw new Error('enntered password invalid');
      }

      const user: Partial<typeof userStorage> = userStorage;
      delete user.password;
      await storage.sessionEmail.set(email);
      dispatch(userSliceActions.setUser(user));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const signUp = async (enteredData: SignUpData) => {
    try {
      const data = enteredData;
      const { email } = data;
      const existenceUser = await storage.user.get(email);

      if (existenceUser) {
        throw new Error('user with this email already exist');
      }

      delete data.repeatPassword;
      await storage.user.set(data, email);
      await storage.sessionEmail.set(email);

      const user: Partial<typeof data> = data;
      delete user.password;
      dispatch(userSliceActions.setUser(user));
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const remove = async () => {
    try {
      const currentEmail = await storage.sessionEmail.get();
      if (!currentEmail) {
        throw new Error();
      }
      await storage.user.remove(currentEmail);
      dispatch(userSliceActions.removeUser());
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await storage.sessionEmail.remove();
      dispatch(userSliceActions.removeUser());
    } catch (error) {
      console.error(error);
    }
  };

  const changePassword = async (data: PasswordsData) => {
    try {
      const { password, newPassword } = data;
      const currentEmail = await storage.sessionEmail.get();
      if (!currentEmail) {
        throw new Error();
      }
      const user = await storage.user.get(currentEmail);
      if (!user) {
        throw new Error('user not found');
      }
      if (password !== user.password) {
        throw new Error('Entered password invalid');
      }
      const newUser = {
        ...user,
        password: newPassword,
      };
      await storage.user.update(currentEmail, newUser);
      setIsSuccessFul(true);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    isSuccesful,
    setIsSuccessFul,
    signIn,
    signUp,
    remove,
    logOut,
    changePassword,
  };
};
