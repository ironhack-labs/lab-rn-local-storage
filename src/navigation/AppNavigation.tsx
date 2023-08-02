import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskDetails } from '../screens/TaskDetails';
import { TaskList } from '../screens/TaskList';
import { TaskForm } from '../screens/TaskForm';
import { ITask } from '../types/types';

type RootStackParamList = {
  Home: undefined;
  Details: { item: ITask };
  Form: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TaskList} />
        <Stack.Screen name="Details" component={TaskDetails} />
        <Stack.Screen name="Form" component={TaskForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;