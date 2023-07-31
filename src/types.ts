export type CATEGORY = 'HOME' | 'WORK' | 'LEARNING';

export type Task = {
  id: string;
  title: string;
  description: string;
  category: CATEGORY;
  completed: boolean;
};

export type TaskList = Task[];
