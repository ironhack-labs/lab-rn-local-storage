import {SafeAreaView, StatusBar} from 'react-native';
import React, {PropsWithChildren} from 'react';

const AppContainer = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default AppContainer;
