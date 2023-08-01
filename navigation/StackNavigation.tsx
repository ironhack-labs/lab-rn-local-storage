import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TaskListScreen} from '../screens/TaskListScreen';
import {TaskDetailScreen} from '../screens/TaskDetailScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={TaskListScreen} />
      <Stack.Screen name="Details" component={TaskDetailScreen} />
    </Stack.Navigator>
  );
};
