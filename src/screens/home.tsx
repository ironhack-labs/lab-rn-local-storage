import React from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { HomeProps } from '../navigation/types';
import { Task } from '../types';
import { useTaskList } from '../context';

export default function HomeScreen({ route, navigation }: HomeProps) {
  const { taskList } = useTaskList();
  const renderItem: ListRenderItem<Task> = ({ item }) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.category}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        data={taskList}
        keyExtractor={task => task.id}
        renderItem={renderItem}
      />
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
