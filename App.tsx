import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {TaskProvider} from './src/context/taskContext';

function App(): JSX.Element {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
}

export default App;
