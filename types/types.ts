export type Task = {
  id: string;
  name: string;
  description: string;
  status: TaskStatus;
  type: string;
};

export enum TaskStatus {
  IN_PROGRESS = 'IN PROGRESS',
  COMPLETE = 'COMPLETE',
}

export enum TaskTypes {
  IT = 'IT',
  PROJECT = 'PROJECT',
  MARKETING = 'MARKETING',
  EMPTY = '',
}

export type TaskContextValue = {
  state: {
    tasks: Task[];
    loading: boolean;
  };
  addTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  isLoading: () => void;
};

export type TaskState = {
  tasks: Task[];
  loading: boolean;
};

export const types = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  IS_LOADING: 'IS_LOADING',
  REHYDRATING: 'REHYDRATING',
};

type TaskPayload = {type: string; payload: {task: Task}};
type LoadingPayload = {type: string; payload: {loading: boolean}};
type RehydratingPayload = {type: string; payload: TaskState};

export type ActionTypes = TaskPayload | LoadingPayload | RehydratingPayload;

// Routes
export type RootStackParamList = {
  Home: undefined;
  Details: {id: string};
  Add: undefined;
};
