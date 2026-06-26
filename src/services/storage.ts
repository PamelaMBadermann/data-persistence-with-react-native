import AsyncStorage from '@react-native-async-storage/async-storage';

export const salvarCor = async (valor: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('cor', valor);
  } catch (error) {
    console.error(error);
  }
};

export const obterCor = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('cor');
  } catch (error) {
    console.error(error);
    return null;
  }
};