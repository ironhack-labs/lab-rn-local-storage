import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {TaskProvider} from './src/context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
};

export default App;
