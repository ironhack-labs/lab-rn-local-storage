import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {AppNavigator} from './src/navigation';
import {AppProvider} from './src/context';

const App = () => (
  // NOTE: I need full screen its easier to use style inline, so the next comment remove the eslint warning
  // eslint-disable-next-line react-native/no-inline-styles
  <SafeAreaView style={{flex: 1}}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </ApplicationProvider>
  </SafeAreaView>
);

export default App;
