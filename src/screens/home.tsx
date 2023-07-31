import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeProps } from '../navigation/types';

export default function HomeScreen({ route, navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
});
