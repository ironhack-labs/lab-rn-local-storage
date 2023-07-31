import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TaskDetailScreen from '../srceens/TaskDetailScreen';
import { colors } from '../theme/colors';
import { SearchStackParamList } from '../types/SearchStackParamList';
import TaskSearchScreen from '../srceens/TaskSearchScreen';

const Stack = createStackNavigator<SearchStackParamList>()

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTitleStyle: { color: colors.primaryDark },
            headerBackTitleStyle: { color: colors.primaryDark },
            headerTintColor: colors.primaryDark
        }}>
            <Stack.Screen name="SearchScreen" component={TaskSearchScreen} options={{ title: "Task List" }} />
            <Stack.Screen name='SearchDetailScreen' component={TaskDetailScreen} options={{ title: "Task Detail" }} />
        </Stack.Navigator>
    );
}

export default SearchStackNavigator;