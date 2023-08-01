import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskCreation from '../screens/TaskCreation';
import TaskList from '../screens/TaskList';
import { Modal, Text, TouchableOpacity } from 'react-native';
import TaskDetails from '../screens/TaskDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { taskCategory } from '../types/TaskContext';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator()

const StackNavigation: React.FC = () => {
    return <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
    </Stack.Navigator>
}

function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="TaskList"
                component={StackNavigation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ }) => (
                        <Text>X</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="TaskCreation"
                component={TaskCreation}
                options={{
                    tabBarIcon: ({ }) => (
                        <Text>X</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Navigation;
