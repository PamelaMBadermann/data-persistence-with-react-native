import { Button, Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { salvarCor, obterCor } from './src/services/storage';

import { styles } from './src/styles/app.styles';

export default function App() {
  const salvar = async () => {
    await salvarCor('Laranja');
    console.log('Cor salva com sucesso!');
  };

  const recuperar = async () => {
    const cor = await obterCor();
    console.log('Cor recuperada:', cor);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
      >
        <Text>Teste do AsyncStorage</Text>

        <Button
          title="Salvar"
          onPress={salvar}
        />

        <Button
          title="Recuperar"
          onPress={recuperar}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}