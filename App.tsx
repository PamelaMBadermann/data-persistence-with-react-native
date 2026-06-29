import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation';
import { criarBanco } from './src/database/migrations';

export default function App() {
  useEffect(() => {
    criarBanco();
  }, []);
  
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}