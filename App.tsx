import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavitagor from './src/navigation/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavitagor />
    </NavigationContainer>
  );
};

export default App;
