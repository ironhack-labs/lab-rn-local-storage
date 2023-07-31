import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {TaskStackParamList} from '../types';
import {
  TaskCreationScreen,
  TaskDetailScreen,
  TasksListScreen,
} from '../screens';
import {appStyles} from '../theme/App.styles';

export type TaskDetailScreenProps = NativeStackScreenProps<
  TaskStackParamList,
  'TaskDetails'
>;

const TaskStack = createNativeStackNavigator<TaskStackParamList>();

const TaskStackNavigator = () => {
  return (
    <TaskStack.Navigator
      initialRouteName="TasksList"
      screenOptions={{headerShown: false, contentStyle: appStyles.container}}>
      <TaskStack.Screen name="TaskCreation" component={TaskCreationScreen} />
      <TaskStack.Screen name="TaskDetails" component={TaskDetailScreen} />
      <TaskStack.Screen name="TasksList" component={TasksListScreen} />
    </TaskStack.Navigator>
  );
};

export default TaskStackNavigator;
