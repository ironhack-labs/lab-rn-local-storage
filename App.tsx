import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigationTabs from './src/navigation/AppNavigationTabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigationTabs />
    </NavigationContainer>
  );
};

export default App;
