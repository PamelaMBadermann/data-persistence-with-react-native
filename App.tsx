import React from 'react';
import { Button, Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { Produto } from './src/models/Produto';
import {
  salvarProduto,
  obterProduto,
} from './src/services/storage';

export default function App() {
  const salvar = async () => {
    const produto = new Produto(
      1,
      'Teclado',
      50
    );

    await salvarProduto(produto);

    console.log('Produto salvo com sucesso!');
  };

  const recuperar = async () => {
    const produto = await obterProduto();

    if (produto) {
      console.log('Produto recuperado:');
      console.log(`Código: ${produto.codigo}`);
      console.log(`Nome: ${produto.nome}`);
      console.log(`Quantidade: ${produto.quantidade}`);
    } else {
      console.log('Nenhum produto encontrado.');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Text style={{ fontSize: 20 }}>
          AsyncStorage
        </Text>

        <Button
          title="Salvar Produto"
          onPress={salvar}
        />

        <Button
          title="Recuperar Produto"
          onPress={recuperar}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}