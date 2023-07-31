import {createStackNavigator} from '@react-navigation/stack';
import TaskDetails from '../screens/TaskDetails';
import TaskList from '../screens/TaskList';

const Stack = createStackNavigator();

export default function AppNavigationMain() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
