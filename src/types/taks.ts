import { StackNavigationProp } from "@react-navigation/stack";

export interface Task {
  id: number;
  title: string;
  category: string;
  description: string;
  completed: boolean;
}

export interface TaskDetailProps {
  route: { params: { task: Task } };
  navigation: { goBack: () => void };
}

export type RootStackParamList = {
  Tareas: undefined;
  Detalles: { task: Task };
  CrearTarea: undefined;
};

export type TaskDetailNavigationProp = StackNavigationProp<RootStackParamList, 'Detalles'>;