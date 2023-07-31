import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { useTasksContext } from '../context/taksContext';
import { Task } from '../types/taks';

export interface TaskDetailProps {
  route: { params: { task: Task } };
  navigation: { goBack: () => void };
}

const TaskDetailScreen = ({ route, navigation }: TaskDetailProps) => {
  const { task } = route.params;
  const { dispatch } = useTasksContext();

  const handleCompleteTask = () => {
    dispatch({ type: 'UPDATE_TASK', payload: { id: task.id, completed: !task.completed } });
    navigation.goBack();
  };

  const handleDeleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Título: {task.title}</Text>
      <Text style={styles.description}>Descripción: {task.description}</Text>
      <Text style={styles.category}>Categoría: {task.category}</Text>
      <Text style={styles.status}>Estado: {task.completed ? 'Completada' : 'Pendiente'}</Text>

      <Button
        title={task.completed ? 'Marcar como Pendiente' : 'Marcar como Completada'}
        onPress={handleCompleteTask}
        color={task.completed ? '#007BFF' : '#28A745'}
      />
      <Button title="Eliminar Tarea" onPress={handleDeleteTask} color="#DC3545" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#E1E9F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default TaskDetailScreen;
