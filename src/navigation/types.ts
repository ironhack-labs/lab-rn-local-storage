import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  TaskDetail: undefined;
  TaskCreation: undefined;
};
export type NavigationProps = StackNavigationProp<RootStackParamList>;

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type TaskDetailProps = StackScreenProps<
  RootStackParamList,
  'TaskDetail'
>;
export type TaskCreationProps = StackScreenProps<
  RootStackParamList,
  'TaskCreation'
>;
