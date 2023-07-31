import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/Task';

const TaskDetailsScreen = ({ route, navigation }) => {
  const { state, dispatch } = useContext(TaskContext);
  const { tasks } = state;
  const { taskId } = route.params;

  const task: Task | undefined = tasks.find((t) => t.id === taskId);

  const handleCompleteTask = () => {
    if (task) {
      dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id: task.id, completed: !task.completed } });
      navigation.goBack();
    }
  };

  const handleDeleteTask = () => {
    if (task) {
      // Implement task deletion logic here
      navigation.goBack();
    }
  };

  if (!task) {
    return <Text>Task not found</Text>;
  }

  return (
    <View>
      <Text>Title: {task.title}</Text>
      <Text>Description: {task.description}</Text>
      <Text>Category: {task.category}</Text>
      <Text>Completion Status: {task.completed ? 'Completed' : 'Pending'}</Text>
      <Button title={task.completed ? 'Mark as Pending' : 'Mark as Completed'} onPress={handleCompleteTask} />
      <Button title="Delete Task" onPress={handleDeleteTask} />
    </View>
  );
};

export default TaskDetailsScreen;
