import React from 'react';

import AppNavigator from './src/navigation/app_navigator';
import AppProvider from './src/context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
