/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { TaskProvider } from './src/context/useTask';

function App(): JSX.Element {

  return (
    <TaskProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </TaskProvider>
  );
}

export default App;
