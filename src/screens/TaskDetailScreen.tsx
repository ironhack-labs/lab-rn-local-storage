import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTasksContext } from '../context/TasksContext';
import { Task } from '../types/Task';

interface TaskDetailProps {
  route: { params: { task: Task } };
  navigation: { goBack: () => void };
}

const TaskDetailScreen = ({ route, navigation }: TaskDetailProps) => {
  const { dispatch } = useTasksContext();
  const { task } = route.params;
  const [currentTask, setCurrentTask] = useState<Task>(task);

  useEffect(() => {
    setCurrentTask(task);
  }, [task]);

  const handleCompleteTask = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: currentTask.id });
    navigation.goBack();
  };

  const handleDeleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: currentTask.id });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>{currentTask.title}</Text>
        <Text style={styles.taskDescription}>{currentTask.description}</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryLabel}>Categoría:</Text>
          <Text style={styles.categoryText}>{currentTask.category}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Estado:</Text>
          <Text style={styles.statusText}>{currentTask.completed ? 'Completada' : 'Pendiente'}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.completeButton, currentTask.completed && styles.incompleteButton]}
        onPress={handleCompleteTask}
      >
        <Text style={styles.buttonText}>
          {currentTask.completed ? 'Marcar como Pendiente' : 'Marcar como Completada'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteTask}>
        <Text style={styles.buttonText}>Eliminar Tarea</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  taskContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  completeButton: {
    backgroundColor: '#00cc00',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  incompleteButton: {
    backgroundColor: '#ff9933',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskDetailScreen;
