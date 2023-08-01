import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TaskListScreen} from '../screens/TaskListScreen';
import {TaskCreationScreen} from '../screens/TaskCreationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TaskDetailsScreen} from '../screens/TaskDetailsScreen';
import {Task} from '../interfaces/Task';

export type RootStackParamList = {
  Home: undefined;
  TaskCreation: undefined;
  TaskList: undefined;
  TaskDetails: {task: Task; index: number};
};
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetailsScreen}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{
          title: 'Home',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: '#fff',
          tabBarStyle: {backgroundColor: 'black'},
        }}
      />
      <Tab.Screen
        name="TaskCreation"
        component={TaskCreationScreen}
        options={{
          title: 'Add',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: '#fff',
          tabBarStyle: {backgroundColor: 'black'},
        }}
      />
    </Tab.Navigator>
  );
}
