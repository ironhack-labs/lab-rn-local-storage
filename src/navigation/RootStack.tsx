import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TaskListScreen } from '../screens/TaskListScreen';
import { TaskCreationScreen } from '../screens/TaskCreationScreen';
import { TaskDetailsScreen } from '../screens/TaskDetailsScreen';
import { Task } from '../types/Task';

export type RootStackParamList = {
  TaskList: undefined;
  TaskCreation: undefined;
  TaskDetails: {task: Task, index: number};
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName='TaskList'>
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="TaskCreation" component={TaskCreationScreen}/>
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen}/>
    </Stack.Navigator>
  )
}
