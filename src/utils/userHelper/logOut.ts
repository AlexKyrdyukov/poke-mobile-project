import storage from 'src/utils/AsyncStorageHelper';

const logOut = async () => {
  try {
    await storage.sessionEmail.remove();
  } catch (error) {
    console.error(error);
  }
};

export default logOut;
