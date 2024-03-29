import 'react-native-get-random-values';
import { v4 } from 'uuid';
import storageItem from 'src/utils/AsyncStorageHelper';

const getDeviceId = async () => {
  const sessionEmail = await storageItem.sessionEmail.get();

  const typeConfirmation = (email: string | null): email is string => {
    return (email as string)?.length !== undefined;
  };

  const userEmail = typeConfirmation(sessionEmail) ? sessionEmail : '';
  const deviceId = await storageItem.deviceId.get(userEmail);
  if (!deviceId) {
    const newId = v4();
    await storageItem.deviceId.set(newId, userEmail);
    return newId;
  }
  return deviceId;
};

export default getDeviceId;
