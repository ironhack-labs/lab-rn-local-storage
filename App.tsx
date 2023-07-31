import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import {TaskProvider} from './src/context/TaskContext';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <TaskProvider>
        <MainNavigator />
      </TaskProvider>
    </SafeAreaView>
  );
};

export default App;
