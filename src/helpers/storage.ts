import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, data: string) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    // Saving error
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (e) {
    // Reading error
  }
};
