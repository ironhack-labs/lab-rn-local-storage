/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TaskCreationScreen} from '../screens/TaskCreationScreen';
import {StackNavigation} from './StackNavigation';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TaskList" component={StackNavigation} />
      <Tab.Screen name="AddTask" component={TaskCreationScreen} />
    </Tab.Navigator>
  );
};
