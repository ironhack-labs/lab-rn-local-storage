export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  category: string;
};

export type NewTask = Omit<Task, 'id'>;
