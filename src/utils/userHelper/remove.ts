import storage from 'src/utils/AsyncStorageHelper';

const remove = async () => {
  try {
    const currentEmail = await storage.sessionEmail.get();
    if (!currentEmail) {
      throw new Error();
    }
    await storage.user.remove(currentEmail);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default remove;
