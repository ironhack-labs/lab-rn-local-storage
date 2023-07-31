import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {NativeStackParamList} from '../types/Stack.type';

import {TASK_LIST, TASK_CREATION, TASK_DETAILS} from '../constants/screens';

import {TaskList, TaskCreation, TaskDetails} from '../screens';

const Stack = createNativeStackNavigator<NativeStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={TASK_LIST}>
        <Stack.Screen
          name={TASK_LIST}
          component={TaskList}
          options={{
            title: 'Mis tareas',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name={TASK_CREATION}
          component={TaskCreation}
          options={{
            title: 'Nueva tarea',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name={TASK_DETAILS}
          component={TaskDetails}
          options={{
            title: 'Detalles de la tarea',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
