import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLocalStorageItem<T extends object>(
  key: string,
): Promise<T> {
  const itemString = await AsyncStorage.getItem(key);

  if (!itemString) {
    throw new Error(`Data with ${key} key it was not found`);
  }

  return JSON.parse(itemString) as T;
}

export const setLocalStorageItem = async (
  key: string,
  value: unknown,
): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};
