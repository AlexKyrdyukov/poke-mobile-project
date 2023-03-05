import storage from 'src/utils/AsyncStorageHelper';

export type SignInData = {
  email: string;
  password: string;
};

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
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default signIn;
