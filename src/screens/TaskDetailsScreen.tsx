import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';
import {useTaskContext} from '../context/TaskContext';

interface TaskDetailsScreenProps {
  route: {params?: {taskId: number}};
}

const TaskDetailsScreen: React.FC<TaskDetailsScreenProps> = ({route}) => {
  const {taskId} = route.params ?? {};
  const {tasks, dispatch} = useTaskContext();

  // Buscar la task por su id
  const task = tasks.find(task => task.id === taskId);

  // Funcion para marcar la tarea completada
  const handleCompleteTask = () => {
    const updatedTasks = tasks.map(t =>
      t.id === taskId ? {...t, completed: true} : t,
    );

    dispatch({type: 'SET_TASKS', payload: updatedTasks});
  };

  // Funcion para eliminar una task
  const handleDeleteTask = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updatedTasks = tasks.filter(t => t.id !== taskId);

            dispatch({type: 'SET_TASKS', payload: updatedTasks});
          },
        },
      ],
    );
  };

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>Task not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.category}>{task.category}</Text>
      <Text style={styles.status}>
        {task.completed ? 'Completed' : 'Not Completed'}
      </Text>
      {!task.completed && (
        <Button title="Mark as Completed" onPress={handleCompleteTask} />
      )}
      <Button title="Delete Task" onPress={handleDeleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  notFoundText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  status: {
    fontSize: 16,
    marginBottom: 20,
    color: '#007AFF',
  },
});

export default TaskDetailsScreen;
