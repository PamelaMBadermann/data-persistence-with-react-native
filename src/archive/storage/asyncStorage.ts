import AsyncStorage from '@react-native-async-storage/async-storage';
import { Produto } from '../../models/Produto';

const STORAGE_KEYS = {
  PRODUTOS: 'produtos',
};

type ProdutoDTO = {
  codigo: number;
  nome: string;
  quantidade: number;
};

export const obterProdutos = async (): Promise<Produto[]> => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEYS.PRODUTOS);

    if (!json) {
      return [];
    }

    const lista: ProdutoDTO[] = JSON.parse(json);

    return lista.map(
      (produto) =>
        new Produto(
          produto.codigo,
          produto.nome,
          produto.quantidade
        )
    );
  } catch (error) {
    console.error('Erro ao recuperar produtos:', error);
    return [];
  }
};

export const salvarProduto = async (
  produto: Produto
): Promise<void> => {
  try {
    const lista = await obterProdutos();

    lista.push(produto);

    await AsyncStorage.setItem(
      STORAGE_KEYS.PRODUTOS,
      JSON.stringify(lista)
    );
  } catch (error) {
    console.error('Erro ao salvar produto:', error);
  }
};

export const removerProduto = async (
  codigo: number
): Promise<void> => {
  try {
    const lista = await obterProdutos();

    const novaLista = lista.filter(
      (produto) => produto.codigo !== codigo
    );

    await AsyncStorage.setItem(
      STORAGE_KEYS.PRODUTOS,
      JSON.stringify(novaLista)
    );
  } catch (error) {
    console.error('Erro ao remover produto:', error);
  }
};

export const atualizarProduto = async (
  produtoAtualizado: Produto
): Promise<void> => {
  try {
    const lista = await obterProdutos();

    const novaLista = lista.map((produto) =>
      produto.codigo === produtoAtualizado.codigo
        ? produtoAtualizado
        : produto
    );

    await AsyncStorage.setItem(
      STORAGE_KEYS.PRODUTOS,
      JSON.stringify(novaLista)
    );
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
  }
};

export const limparProdutos = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.PRODUTOS);
  } catch (error) {
    console.error('Erro ao limpar produtos:', error);
  }
};