import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

import type {Task} from '../types';

// NOTE: use separate file with type to avoid circular dependencies
export type RootStackParamList = {
  TaskList: undefined;
  TaskCreation: undefined;
  TaskDetails: {
    task: Task;
  };
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

export type TaskListScreenProps = StackScreenProps<
  RootStackParamList,
  'TaskList'
>;
export type TaskCreationScreenProps = StackScreenProps<
  RootStackParamList,
  'TaskCreation'
>;
export type TaskDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'TaskDetails'
>;
