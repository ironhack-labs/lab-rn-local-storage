/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { ContextProvider } from './src/context/Context';

function App(): JSX.Element {
  return (
    <ContextProvider>
      <AppNavigation />
    </ContextProvider>
  );
}

export default App;
