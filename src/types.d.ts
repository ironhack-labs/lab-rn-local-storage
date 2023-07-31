export type Categories = string[];

export type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
};

export type TaskStackParamList = {
  TaskCreation: undefined;
  TaskDetails: undefined;
  TasksList: undefined;
};

export type TasksContextState = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

export type TasksReducerState = {
  tasks: Task[];
};

export type TasksReducerAction = {
  type: 'addTask';
  payload: {task: Task};
};
