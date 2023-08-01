import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TaskListScreen from '../screens/TaskListScreen';
import TaskCreationScreen from '../screens/TaskCreationScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import TaskSearchScreen from '../screens/TaskSearchScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TaskList" component={TaskListScreen} />
        <Tab.Screen name="TaskCreation" component={TaskCreationScreen} />
        <Tab.Screen name="TaskDetails" component={TaskDetailsScreen} />
        <Tab.Screen name="TaskSearch" component={TaskSearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
