import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreens';
import CreateTaskScreen from '../screens/createScreens';
import TaskDetailScreen from '../screens/taskDetailScreens';
import SearchScreen from '../screens/searchScreen';
import { Task } from '../types/taks';

export type RootStackParamList = {
  Tareas: undefined;
  Detalles: { task: Task };
  CrearTarea: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const TasksStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tareas" component={HomeScreen} />
    <Stack.Screen name="Detalles" component={TaskDetailScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Tareas" component={TasksStack} />
      <Tab.Screen name="Agregar Tarea" component={CreateTaskScreen} />
      <Tab.Screen name="Buscar Tarea" component={SearchScreen}/>

    </Tab.Navigator>
);

export default AppNavigator;
