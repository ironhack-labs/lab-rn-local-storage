import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Navigation from './src/navigation/Navigation';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Divider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Header from './src/components/Header';
import UseStore from './src/services/Store';

function App(): JSX.Element {
  const {tasks, dispatch, TasksContext, TasksDispatchContext} = UseStore();
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <NavigationContainer theme={theme}>
          <SafeAreaView style={styles.topArea} />
          <StatusBar
            barStyle="light-content"
            backgroundColor="rgb(21, 26, 48)"
          />
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.dark}>
            <Layout style={styles.mainArea}>
              <Header />
              <Divider />
              <Navigation />
            </Layout>
          </ApplicationProvider>
        </NavigationContainer>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

const styles = StyleSheet.create({
  topArea: {
    flex: 0,
    backgroundColor: 'rgb(21, 26, 48)',
  },
  mainArea: {
    flex: 1,
    backgroundColor: 'rgb(21, 26, 48)',
  },
  card: {
    flex: 1,
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1a2138',
  },
};

export default App;
