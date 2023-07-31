import {StackScreenProps, StackNavigationProp} from '@react-navigation/stack';

// NOTE: use separate file with type to avoid circular dependencies
export type RootStackParamList = {
  TaskList: undefined;
  TaskCreation: undefined;
  TaskDetails: undefined;
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
