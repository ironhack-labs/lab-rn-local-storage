import React from 'react';
import { TasksProvider } from './src/context/TasksContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <TasksProvider>
      <AppNavigator />
    </TasksProvider>
  );
};

export default App;
