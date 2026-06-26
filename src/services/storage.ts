import AsyncStorage from '@react-native-async-storage/async-storage';
import { Produto } from '../models/Produto';

const STORAGE_KEYS = {
  PRODUTO: 'produto',
};

export const salvarProduto = async (produto: Produto): Promise<void> => {
  try {
    const produtoJSON = JSON.stringify(produto);

    await AsyncStorage.setItem(STORAGE_KEYS.PRODUTO, produtoJSON);
  } catch (error) {
    console.error('Erro ao salvar produto:', error);
  }
};

export const obterProduto = async (): Promise<Produto | null> => {
  try {
    const produtoJSON = await AsyncStorage.getItem(STORAGE_KEYS.PRODUTO);

    if (!produtoJSON) {
      return null;
    }

    const objeto = JSON.parse(produtoJSON);

    return new Produto(
      objeto.codigo,
      objeto.nome,
      objeto.quantidade
    );
  } catch (error) {
    console.error('Erro ao recuperar produto:', error);
    return null;
  }
};