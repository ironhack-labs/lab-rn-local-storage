import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from '../screens/TaskListScreen';
import TaskCreationScreen from '../screens/TaskCreationScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="TaskList" component={TaskListScreen} />
        <Stack.Screen name="TaskCreation" component={TaskCreationScreen} />
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
