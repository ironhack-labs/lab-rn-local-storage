import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TaskDetailProps } from '../navigation/types';

export default function TaskDetailScreen({
  route,
  navigation,
}: TaskDetailProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Detail Screen</Text>
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
