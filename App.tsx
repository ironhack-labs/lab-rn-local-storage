import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import TaskContextProvider from './src/context/taskcontext/taskState';

const App = () => {
  return (
    <NavigationContainer>
      <TaskContextProvider>
        <RootNavigator />
      </TaskContextProvider>
    </NavigationContainer>
  );
}

export default App