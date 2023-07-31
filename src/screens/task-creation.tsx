import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TaskCreationProps } from '../navigation/types';

export default function TaskCreationScreen({
  route,
  navigation,
}: TaskCreationProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task CreationScreen Screen</Text>
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
