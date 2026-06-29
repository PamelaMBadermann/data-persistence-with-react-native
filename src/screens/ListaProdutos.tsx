import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import ProdutoItem from '../components/ProdutoItem';
import { Produto } from '../models/Produto';
import {
  obterProdutos,
  removerProduto,
} from '../services/storage';
import { styles } from '../styles/app.styles';

type Props = {
  navigation: any;
};

export default function ListaProdutos({
  navigation,
}: Props) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const carregarProdutos = async () => {
    const lista = await obterProdutos();
    setProdutos(lista);
  };

  useFocusEffect(
    useCallback(() => {
      carregarProdutos();
    }, [])
  );

  const excluirProduto = async (codigo: number) => {
    await removerProduto(codigo);
    carregarProdutos();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('ProdutoForm')
        }
      >
        <Text style={styles.buttonTextBig}>
          Novo Produto
        </Text>
      </TouchableOpacity>

      <FlatList
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
        data={produtos}
        keyExtractor={(item) =>
          item.codigo.toString()
        }
        renderItem={({ item }) => (
          <ProdutoItem
            produto={item}
            onDelete={() =>
              excluirProduto(item.codigo)
            }
          />
        )}
      />
    </View>
  );
}