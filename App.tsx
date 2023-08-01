import React from 'react';
import {TaskProvider} from './src/context/TaskContext';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';

function App(): JSX.Element {
  return (
    <TaskProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </TaskProvider>
  );
}

export default App;
