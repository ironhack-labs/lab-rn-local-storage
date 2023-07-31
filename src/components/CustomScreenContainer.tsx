import React, {PropsWithChildren} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

const CustomScreenContainer = ({children}: PropsWithChildren) => {
  return <SafeAreaView style={stlyes.container}>{children}</SafeAreaView>;
};

const stlyes = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});

export default CustomScreenContainer;
