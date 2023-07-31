import {createStackNavigator} from '@react-navigation/stack';
import TaskCreation from '../screens/TaskCreation';

const Stack = createStackNavigator();

export default function AppNavigationTaskCreation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskCreation"
        component={TaskCreation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
