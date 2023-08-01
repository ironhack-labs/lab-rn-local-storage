import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigation';
import { TaskProvider } from './src/context';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TaskProvider>
        <Navigation />
      </TaskProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
