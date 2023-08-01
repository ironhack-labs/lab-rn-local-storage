export type Category = 'ALL' | 'HOME' | 'WORK' | 'LEARNING';

export type Task = {
  id: string;
  title: string;
  description: string;
  category: Category;
  completed: boolean;
};

export type TaskList = Task[];

export type FormData = {
  title: string;
  description: string;
  category: Category;
  completed: boolean;
};
