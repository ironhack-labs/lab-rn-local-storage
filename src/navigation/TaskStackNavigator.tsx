import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TaskStackParamList } from '../types/TaskStackParamList';
import TaskListScreen from '../srceens/TaskListScreen';
import TaskCreationScreen from '../srceens/TaskCreationScreen';
import TaskDetailScreen from '../srceens/TaskDetailScreen';
import { colors } from '../theme/colors';

const Stack = createStackNavigator<TaskStackParamList>()

const TaskStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { color: colors.primaryDark },
            headerBackTitleStyle: { color: colors.primaryDark },
            headerTintColor: colors.primaryDark
        }}>
            <Stack.Screen name='TaskListScreen' component={TaskListScreen} options={{ title: "Task List" }} />
            <Stack.Screen name='TaskCreationScreen' component={TaskCreationScreen} options={{ title: "New Task" }} />
            <Stack.Screen name='TaskDetailScreen' component={TaskDetailScreen} options={{ title: "Task Detail" }} />
        </Stack.Navigator>
    );
}

export default TaskStackNavigator;