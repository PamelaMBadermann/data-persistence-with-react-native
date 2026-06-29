import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaProdutos from '../screens/ListaProdutos';
import ProdutoForm from '../screens/ProdutoForm';

export type RootStackParamList = {
  ListaProdutos: undefined;
  ProdutoForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListaProdutos"
      >
        <Stack.Screen
          name="ListaProdutos"
          component={ListaProdutos}
          options={{
            title: 'Listagem de Produtos',
          }}
        />

        <Stack.Screen
          name="ProdutoForm"
          component={ProdutoForm}
          options={{
            title: 'Novo Produto',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}