import React from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import { useTaskList } from '../hooks';
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
      <View style={styles.category}>
        <Text style={styles.smallText}>{task.category}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.buttonContainer}>
          <Button
            title="Delete"
            color={'red'}
            onPress={() => handleDeleteTask(task.id)}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.smallText}>Mark as completed:</Text>
          <Switch
            onValueChange={() => updateTaskStatus(task.id)}
            value={task.completed}
          />
        </View>
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: 'white',
    flex: 1,
  },
  category: {
    alignItems: 'flex-end',
  },
  content: {
    flex: 1,
  },
  actions: {
    height: 100,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    color: '#666',
    fontSize: 16,
  },
  buttonContainer: {
    width: '40%',
    justifyContent: 'center',
  },
  switchContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  smallText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
});
