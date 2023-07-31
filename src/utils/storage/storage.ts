import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageData = async <T = Record<string, any>>(
  key: string,
  value: T,
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};

export const getStorageData = async <T = Record<string, any>>(key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
  } catch (e) {
    return null;
  }
};
