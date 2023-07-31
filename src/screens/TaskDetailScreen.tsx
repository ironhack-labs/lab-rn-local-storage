import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useTasksContext } from '../context/TasksContext';
import { Task } from '../types/Task';
import { TaskDetailProps } from '../types/Task';



const TaskDetailScreen = ({ route, navigation }: TaskDetailProps) => {
  const { task } = route.params;
  const { dispatch } = useTasksContext();

  const handleCompleteTask = () => {
    dispatch({ type: 'UPDATE_TASK', payload: { id: task.id, completed: !task.completed } });
  };

  const handleDeleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text>Título: {task.title}</Text>
      <Text>Descripción: {task.description}</Text>
      <Text>Categoría: {task.category}</Text>
      <Text>Estado: {task.completed ? 'Completada' : 'Pendiente'}</Text>

      <Button title={task.completed ? 'Marcar como Pendiente' : 'Marcar como Completada'} onPress={handleCompleteTask} />
      <Button title="Eliminar Tarea" onPress={handleDeleteTask} />
    </SafeAreaView>
  );
};

export default TaskDetailScreen;
