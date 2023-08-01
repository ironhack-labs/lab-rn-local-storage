import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import TaskCreation from '../screens/TaskCreation';
import TaskList from '../screens/TaskList';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import TaskDetails from '../screens/TaskDetails';
import {ITaskItem} from '../services/interface';

export type RootTabParamList = {
  TaskList: {init: boolean};
  TaskCreation: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator();

type TaskListRouteProps = RouteProp<RootTabParamList, 'TaskList'>;

export type RootStackParamList = {
  TaskListHome: {init: boolean};
  Detail: ITaskItem;
};

const HomeStack = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<TaskListRouteProps>();

  useEffect(() => {
    if (route.params?.init)
      navigation.reset({
        index: 0,
        routes: [{name: 'TaskListHome'}],
      });
  }, [route.params?.init]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TaskListHome" component={TaskList} />
      <Stack.Screen name="Detail" component={TaskDetails} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="TaskList"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgb(21, 26, 48)',
          borderColor: 'rgb(21, 26, 48)',
          borderWidth: 0,
          height: 80,
          paddingBottom: 15,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: tab => {
            return (
              <Image
                source={require('../../images/checklist.png')}
                width={15}
                tintColor={tab.focused ? '#F2668B' : '#ffffff'}
              />
            );
          },
          tabBarActiveTintColor: '#F2668B',
          tabBarInactiveTintColor: '#ffffff',
          tabBarLabelStyle: {fontSize: 16},
        }}
        name="TaskList"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tab => {
            return (
              <Image
                source={require('../../images/more.png')}
                width={15}
                tintColor={tab.focused ? '#F2668B' : '#ffffff'}
              />
            );
          },
          tabBarActiveTintColor: '#F2668B',
          tabBarInactiveTintColor: '#ffffff',
          tabBarLabelStyle: {fontSize: 16},
        }}
        name="TaskCreation"
        component={TaskCreation}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
