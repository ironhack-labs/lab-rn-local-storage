import React from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import { useTaskList } from '../context';
import { TaskDetailProps } from '../navigation/types';

export default function TaskDetailScreen({
  route,
  navigation,
}: TaskDetailProps) {
  const { getTaskById, updateTaskStatus, deleteTask } = useTaskList();
  const task = getTaskById(route.params.id);

  function handleDeleteTask(id: string) {
    deleteTask(id);
    navigation.goBack();
  }

  return task ? (
    <View style={styles.container}>
      <Text style={styles.title}>Task Detail</Text>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>{task.category}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        onValueChange={() => updateTaskStatus(task.id)}
        value={task.completed}
      />

      <Button
        title="Delete"
        color={'red'}
        onPress={() => handleDeleteTask(task.id)}
      />
    </View>
  ) : null;
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
