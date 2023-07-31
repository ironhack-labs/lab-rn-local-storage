import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import TasksStack from './TasksStack';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
