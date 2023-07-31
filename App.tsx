/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  useColorScheme,
} from 'react-native';

import { TaskProvider } from './src/context/TaskContext';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/navigation/RootStack';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <TaskProvider>
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    </TaskProvider>
  );
}



export default App;
