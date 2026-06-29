import { database } from './database';
import { Produto } from '../models/Produto';

export class ProdutoRepository {
  async adicionar(produto: Produto): Promise<void> {
    await database.runAsync(
      `INSERT INTO PRODUTO (CODIGO, NOME, QUANTIDADE)
       VALUES (?, ?, ?)`,
      [
        produto.codigo,
        produto.nome,
        produto.quantidade,
      ]
    );
  }

  async remover(codigo: number): Promise<void> {
    await database.runAsync(
      'DELETE FROM PRODUTO WHERE CODIGO = ?',
      [codigo]
    );
  }

  async obterTodos(): Promise<Produto[]> {
    const rows = await database.getAllAsync<{
      CODIGO: number;
      NOME: string;
      QUANTIDADE: number;
    }>('SELECT * FROM PRODUTO');

    return rows.map(
      (item) =>
        new Produto(
          item.CODIGO,
          item.NOME,
          item.QUANTIDADE
        )
    );
  }
}