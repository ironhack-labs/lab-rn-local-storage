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
