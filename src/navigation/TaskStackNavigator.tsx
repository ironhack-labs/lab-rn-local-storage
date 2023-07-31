import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TaskStackParamList} from '../types';
import {
  TaskCreationScreen,
  TaskDetailScreen,
  TasksListScreen,
} from '../screens';

const TaskStack = createNativeStackNavigator<TaskStackParamList>();

const TaskStackNavigator = () => {
  return (
    <TaskStack.Navigator initialRouteName="TasksList">
      <TaskStack.Screen name="TaskCreation" component={TaskCreationScreen} />
      <TaskStack.Screen name="TaskDetails" component={TaskDetailScreen} />
      <TaskStack.Screen name="TasksList" component={TasksListScreen} />
    </TaskStack.Navigator>
  );
};

export default TaskStackNavigator;
