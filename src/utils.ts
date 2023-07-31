import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
    TODO_LIST: "todo-list"
};

export const saveToStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getFromStorage = async (key: string) => {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
