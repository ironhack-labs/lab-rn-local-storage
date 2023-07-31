import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TasksProvider } from './src/context/taksContext';
import AppNavigator from './src/navigation/appNavigation';
import { theme } from './src/styles/themes';

const App = () => {
  return (
    <NavigationContainer theme={theme}>
    <TasksProvider>
      <AppNavigator />
    </TasksProvider>
    </NavigationContainer>

  );
};

export default App;