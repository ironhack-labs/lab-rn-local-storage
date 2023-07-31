import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import { Task } from '../types/Task';

export type RootStackParamList = {
  Tareas: undefined;
  Detalles: { task: Task };
  CrearTarea: undefined;
};

export type TaskDetailNavigationProp = StackNavigationProp<RootStackParamList, 'Detalles'>;

const Stack = createStackNavigator();

const TasksStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tareas" component={HomeScreen} />
    <Stack.Screen name="Detalles" component={TaskDetailScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="ToDo" component={TasksStack} />
        <Tab.Screen name="CrearTarea" component={CreateTaskScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
