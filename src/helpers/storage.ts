import AsyncStorage from '@react-native-async-storage/async-storage';
import {TaskT} from '../context/taskContext';

export const TASKS_KEY = '@TaskList';
export const CATEGORIES_KEY = '@CategoryList';

export const storeStorageItem = async (key: string, value: TaskT | string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    let itemToSave = [value];

    if (jsonValue !== null) {
      const previousValue = JSON.parse(jsonValue);
      itemToSave = [...previousValue, value];
    }

    await AsyncStorage.setItem(key, JSON.stringify(itemToSave));
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
};

export const getStorageItem = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    throw new Error(`Error on get tasks from storage: ${error}`);
  }
};

export const removeStorageItem = async (key: string, value: TaskT[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    throw new Error(`Error on delete task from storage: ${error}`);
  }
};
