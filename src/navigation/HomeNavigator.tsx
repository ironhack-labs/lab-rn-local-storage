import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {SCREENS} from './constants';
import TaskListScreen from '../screens/TaskListScreen';
import {TodoProps} from '../context';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';

export type HomeNavigatorProps = {
  [SCREENS.TASK_LIST]: undefined;
  [SCREENS.TASK_DETAILS]: {taskIndex: number};
};

const Stack = createStackNavigator<HomeNavigatorProps>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerTitle: 'Task List'}}
        name={SCREENS.TASK_LIST}
        component={TaskListScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'Task Details'}}
        name={SCREENS.TASK_DETAILS}
        component={TaskDetailsScreen}
      />
    </Stack.Navigator>
  );
};

//TODO DELETE
const NoopScreen = () => {
  return <Text>Noop screen</Text>;
};

export default HomeNavigator;
