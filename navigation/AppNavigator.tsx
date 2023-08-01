import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TaskCreationScreen,
  TaskDetailsScreen,
  TaskListScreen,
} from '../src/screens';
import {TaskT} from '../src/context/taskContext';

export type RootStackNavigatonT = {
  Home: undefined;
  TaskCreation: undefined;
  TaskDetails: {task: TaskT} | undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigatonT>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TaskListScreen} />
        <Stack.Screen name="TaskCreation" component={TaskCreationScreen} />
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
