import {SafeAreaView, StatusBar} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {appStyles} from '../theme/App.styles';

const AppContainer = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaView style={appStyles.container}>
      <StatusBar barStyle={'light-content'} />
      {children}
    </SafeAreaView>
  );
};

export default AppContainer;
