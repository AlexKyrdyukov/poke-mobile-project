import AsyncStorage from '@react-native-async-storage/async-storage';
import type { User } from 'src/types/user';

class AsyncStorageItem<D> {
  key: string;

  defaultValue: D | null;

  constructor(
    key: string,
    defaultValue?: D,
  ) {
    this.key = key;
    this.defaultValue = defaultValue ?? null;
  }

  async set(data: D) {
    try {
      await AsyncStorage.setItem(this.key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }

  async get(): Promise<D | null> {
    try {
      const storedItem = await AsyncStorage.getItem(this.key);
      const parsedItem = JSON.parse(storedItem as string);

      return parsedItem || this.defaultValue;
    } catch (error) {
      return this.defaultValue;
    }
  }

  async remove() {
    try {
      await AsyncStorage.removeItem(this.key);
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

const asyncStorage = (email: string) => {
  return {
    user: new AsyncStorageItem<User>(`user${email}`),
  };
};

export default asyncStorage;
