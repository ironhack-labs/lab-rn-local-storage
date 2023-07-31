/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@ui-kitten/components';

import type {
  RootBottomTabsParamList,
  RootStackParamList,
} from './app-navigator.types';
import {
  TaskListScreen,
  TaskDetailsScreen,
  TaskCreationScreen,
  TaskSearchScreen,
} from '../screens';
import {TaskFilterButton} from '../components/task-filter-button';

const Stack = createStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<RootBottomTabsParamList>();

export const TasksHomeNavigator = () => (
  <Stack.Navigator initialRouteName="TaskList">
    <Stack.Screen
      name="TaskList"
      options={{
        headerRight: TaskFilterButton,
      }}
      component={TaskListScreen}
    />
    <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="TasksHome">
      <Tab.Screen
        name="TasksHome"
        component={TasksHomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'List',
          tabBarIcon: props => (
            <Icon
              {...props}
              fill={props.color}
              width={props.size}
              height={props.size}
              name="list-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: props => (
            <Icon
              {...props}
              fill={props.color}
              width={props.size}
              height={props.size}
              name="search-outline"
            />
          ),
        }}
        name="TaskSearch"
        component={TaskSearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Add Task',
          tabBarIcon: props => (
            <Icon
              {...props}
              fill={props.color}
              width={props.size}
              height={props.size}
              name="plus-square-outline"
            />
          ),
        }}
        name="TaskCreation"
        component={TaskCreationScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
