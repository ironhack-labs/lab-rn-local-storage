import { StackNavigationProp } from "@react-navigation/stack";

export interface Task {
  id: number;
  title: string;
  category: string;
  description: string;
  completed: boolean;
}

//StackNavigation
export interface TaskDetailProps {
  route: { params: { task: Task } };
  navigation: { goBack: () => void };
}

//Nuestro RootNavigation BottomTabs
export type RootStackParamList = {
  Tareas: undefined;
  Detalles: { task: Task };
  CrearTarea: undefined;
};

//Funciona para errores de tipo del Stack
export type TaskDetailNavigationProp = StackNavigationProp<RootStackParamList, 'Detalles'>;