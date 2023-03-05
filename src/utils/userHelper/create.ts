import storage from 'src/utils/AsyncStorageHelper';

export type SignUpData = {
  email: string;
  password: string;
  repeatPassword?: string;
};

const create = async (enteredData: SignUpData) => {
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
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
