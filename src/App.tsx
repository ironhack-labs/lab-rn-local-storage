import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TaskStackNavigator} from './navigation';
import {AppContainer} from './components';

const App = () => {
  return (
    <NavigationContainer>
      <AppContainer>
        <TaskStackNavigator />
      </AppContainer>
    </NavigationContainer>
  );
};

export default App;
