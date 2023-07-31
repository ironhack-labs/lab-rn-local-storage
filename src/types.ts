export type CATEGORY = 'HOME' | 'WORK' | 'LEARNING';

export type Task = {
  id: string;
  title: string;
  description: string;
  category: CATEGORY;
};

export type TaskList = Task[];
