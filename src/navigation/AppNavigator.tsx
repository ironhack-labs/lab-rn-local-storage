import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TaskListScreen from '../screens/TaskListScreen';
import TaskCreationScreen from '../screens/TaskCreationScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import TaskSearchScreen from '../screens/TaskSearchScreen';

export type RootStackParamList = {
  TaskList: undefined;
  TaskCreation: undefined;
  TaskDetails: {taskId: number};
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator initialRouteName="TaskList">
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'TaskList') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'TaskCreation') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'TaskSearch') {
              iconName = focused ? 'create' : 'create-outline';
            }
            // You can add more tab icons here if needed

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="TaskList" component={TaskStack} />
        <Tab.Screen name="TaskCreation" component={TaskCreationScreen} />
        <Tab.Screen name="TaskSearch" component={TaskSearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
