// src/types/taskTypes.ts
export type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  completed: boolean;
};

export type ContextState = {
  tasks: Task[];
  categories: string[];
  selectedCategory?: string;
};
