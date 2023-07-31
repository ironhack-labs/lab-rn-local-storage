import 'react-native-gesture-handler';

import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TaskStackNavigator} from './navigation';
import {AppContainer} from './components';
import {TasksContextProvider} from './context/TaskContext';

const AppContextContainer = ({children}: PropsWithChildren) => {
  return <TasksContextProvider>{children}</TasksContextProvider>;
};

const App = () => {
  return (
    <AppContextContainer>
      <NavigationContainer>
        <AppContainer>
          <TaskStackNavigator />
        </AppContainer>
      </NavigationContainer>
    </AppContextContainer>
  );
};

export default App;
