import {StackNavigationProp} from '@react-navigation/stack';
import {Task} from '../types/types';
import {RouteProp} from '@react-navigation/native';

export type NavListBase = {
  TaskList: undefined;
  TaskDetails: Task;
};

// Define el tipo de navegación para las pantallas del stack
export type AppStackNavigationProp = StackNavigationProp<
  NavListBase,
  'TaskDetails'
>;

// Define el tipo de ruta para las pantallas del stack
export type AppStackRouteProp = RouteProp<NavListBase, 'TaskDetails'>;
