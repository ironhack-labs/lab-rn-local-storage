import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

import type {Task} from '../types';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

// NOTE: use separate file with type to avoid circular dependencies
export type RootStackParamList = {
  TaskList: undefined;
  TaskDetails: {
    task: Task;
  };
};

export type RootBottomTabsParamList = {
  TasksHome: undefined;
  TaskCreation: undefined;
  TaskSearch: undefined;
};

export type StackNavigationProps = StackNavigationProp<RootStackParamList>;
export type TabNavigationProps =
  BottomTabNavigationProp<RootBottomTabsParamList>;

export type TaskListScreenProps = StackScreenProps<
  RootStackParamList,
  'TaskList'
>;
export type TaskDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'TaskDetails'
>;

export type TaskCreationScreenProps = BottomTabScreenProps<
  RootBottomTabsParamList,
  'TaskCreation'
>;
export type TaskSearchScreenProps = BottomTabScreenProps<
  RootBottomTabsParamList,
  'TaskSearch'
>;
