

export interface ITaskItem {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
}

export interface ITasksContext {
  tasks: ITaskItem[];
  selectedCategory: string | null;
  selectedTask: null;
}

export interface ITasksActions {
  type: string;
  payload: any;
}
