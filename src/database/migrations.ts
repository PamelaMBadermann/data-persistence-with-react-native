import { database } from './database';

export async function criarBanco() {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS PRODUTO (
      CODIGO INTEGER PRIMARY KEY,
      NOME TEXT NOT NULL,
      QUANTIDADE INTEGER NOT NULL
    );
  `);
}