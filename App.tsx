// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MyTabs} from './navigation/TabNavigation';
import {TaskProvider} from './context/TaskProvider';

function App(): JSX.Element {
  return (
    <TaskProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </TaskProvider>
  );
}

export default App;
