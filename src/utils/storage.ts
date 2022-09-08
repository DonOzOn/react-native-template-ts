import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  TOKEN: '@TOKEN',
  HASCREDENTIALS: 'hasCredentials',
};

export const saveAccessToken = async (data: string) => {
    await AsyncStorage.setItem(KEYS.TOKEN, data);
};

export const getAccessToken = async () => {
  return await AsyncStorage.getItem(KEYS.TOKEN);
};
export const saveHasCredentials = async (data: string) => {
  await AsyncStorage.setItem(KEYS.HASCREDENTIALS, data);
};

export const getHasCredentials = async() => {
  return await AsyncStorage.getItem(KEYS.HASCREDENTIALS);
};
