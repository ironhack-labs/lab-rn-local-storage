import {createStackNavigator} from '@react-navigation/stack';
import TaskList from '../screens/TaskList';

// Create a stack navigator
const Stack = createStackNavigator();

export default function AppNavitagor() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TaskList" component={TaskList} />
    </Stack.Navigator>
  );
}
