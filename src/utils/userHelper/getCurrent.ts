import storage from 'src/utils/AsyncStorageHelper';

const getCurrent = async () => {
  try {
    const sessionEmail = await storage.sessionEmail.get();
    if (!sessionEmail) {
      return null;
    }
    const user = await storage.user.get(sessionEmail);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCurrent;
