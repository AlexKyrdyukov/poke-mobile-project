import AsyncStorage from '@react-native-async-storage/async-storage';
import type { UserStorage } from 'src/types/user';

class AsyncStorageItem<D> {
  rootKey: string;

  constructor(
    rootKey: string,
  ) {
    this.rootKey = rootKey;
  }

  createKey = (nestedKey: string) => {
    return `${this.rootKey}:${nestedKey}`;
  };

  async set(data: D, nestedKey?: string) {
    const key = nestedKey ? this.createKey(nestedKey) : this.rootKey;

    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  async get(nestedKey?: string): Promise<D | null> {
    const key = nestedKey ? this.createKey(nestedKey) : this.rootKey;

    try {
      const storedItem = await AsyncStorage.getItem(key);
      const parsedItem = JSON.parse(storedItem as string);

      return parsedItem;
    } catch (error) {
      return null;
    }
  }

  async remove(nestedKey?: string) {
    const key = nestedKey ? this.createKey(nestedKey) : this.rootKey;

    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }

  async update(nestedKey: string, data: D) {
    const key = nestedKey ? this.createKey(nestedKey) : this.rootKey;
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error(error);
    }
  }
}

const storage = {
  sessionEmail: new AsyncStorageItem<string>('sessionEmail'), // for get session email
  themeApp: new AsyncStorageItem<'dark' | 'light'>('theme'), // for work with theme application
  user: new AsyncStorageItem<UserStorage>('user'), // for get current user add user email as key
  deviceId: new AsyncStorageItem<string>('deviceId'), // for set/get deviceId
  tokens: new AsyncStorageItem<string>('tokens'), // for set/get deviceId
};

export default storage;
