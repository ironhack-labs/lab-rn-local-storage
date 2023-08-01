import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigationTabs from './src/navigation/AppNavigationTabs';
import {AppProvider} from './src/context/Context';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigationTabs />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
