import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigationMain';
import AppNavigationTabs from './src/navigation/AppNavigationTabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigationTabs />
      {/* <AppNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
