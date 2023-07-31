import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native'
import { s } from './src/theme/TodoTheme';

export const App = () => {
  return (
    <>
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Text>Header</Text>
        </View>
        <View style={s.body}>
          <Text>Body</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    <View style={s.footer}>
      <Text>Footer</Text>
    </View>
    </>
  )
}
