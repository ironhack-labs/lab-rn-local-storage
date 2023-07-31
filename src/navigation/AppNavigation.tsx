import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from '../screens/TaskList';
import TaskCreation from '../screens/TaskCreation';
const Tab = createBottomTabNavigator();

// Create a stack navigator
const Stack = createStackNavigator();

export default function AppNavitagor() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Task List" component={TaskList} />
      <Tab.Screen name="Task Creation" component={TaskCreation} />
    </Tab.Navigator>
  );
}
