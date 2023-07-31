import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TaskStackParamList} from '../types';
import {
  TaskCreationScreen,
  TaskDetailScreen,
  TasksListScreen,
} from '../screens';

const TaskStack = createStackNavigator<TaskStackParamList>();

const TaskStackNavigator = () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen name="TaskCreation" component={TaskCreationScreen} />
      <TaskStack.Screen name="TaskDetails" component={TaskDetailScreen} />
      <TaskStack.Screen name="TasksList" component={TasksListScreen} />
    </TaskStack.Navigator>
  );
};

export default TaskStackNavigator;
