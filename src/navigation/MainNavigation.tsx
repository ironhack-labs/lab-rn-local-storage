import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from './constants';
import {TodosContextProvider} from '../context';
import AddTaskScreen from '../screens/AddTaskScreen';
import HomeNavigator from './HomeNavigator';

type TabScreenProps = {
  [SCREENS.HOME_NAVIGATOR]: undefined;
  [SCREENS.TASK_CREATION]: undefined;
};

const Tab = createBottomTabNavigator<TabScreenProps>();

export function MainNavigation() {
  return (
    <TodosContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{headerShown: false}}
            name={SCREENS.HOME_NAVIGATOR}
            component={HomeNavigator}
          />
          <Tab.Screen
            options={{headerTitle: 'Create a Task'}}
            name={SCREENS.TASK_CREATION}
            component={AddTaskScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TodosContextProvider>
  );
};
