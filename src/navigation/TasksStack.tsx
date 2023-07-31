import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import { Task } from '../types/Task';

export type TasksStackParamList = {
  Tareas: undefined;
  Detalles: { task: Task };
};

const Stack = createStackNavigator<TasksStackParamList>();

const TasksStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tareas" component={HomeScreen} />
    <Stack.Screen name="Detalles" component={TaskDetailScreen} />
  </Stack.Navigator>
);

export default TasksStack;
