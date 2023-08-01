// src/App.tsx
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {TaskProvider} from './src/context/TaskContext';
import AppNavigator from './src/navigation/AppNavigator';
import {globalStyles} from './src/styles';

const App = () => {
  return (
    <TaskProvider>
      <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Task Management App</Text>
        <AppNavigator />
      </SafeAreaView>
    </TaskProvider>
  );
};

export default App;
