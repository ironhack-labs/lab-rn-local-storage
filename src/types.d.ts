import {TextInputProps} from 'react-native';

export type Categories = string[];

export type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  isCompleted: boolean;
};

export type TaskStackParamList = {
  TaskCreation: undefined;
  TaskDetails: {task: Task};
  TasksList: undefined;
};

export type TasksContextState = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: number) => void;
  removeTask: (taskId: number) => void;
  setTasks: () => void;
};

export type TasksReducerState = {
  tasks: Task[];
};

export type TasksReducerAction =
  | {
      type: 'setTasks';
      payload: {tasks: Task[]};
    }
  | {
      type: 'addTask';
      payload: {task: Task};
    }
  | {
      type: 'updateTaskStatus';
      payload: {taskId: number};
    }
  | {
      type: 'removeTask';
      payload: {taskId: number};
    };

export type FormInputProps<T extends object> = {
  control: Control<T>;
  controlName: Path<T>;
  inputProps?: TextInputProps;
  error?: string;
  required?: boolean;
  readonly?: boolean;
};

export type ReadonlyInputProps = {
  inputProps?: TextInputProps;
  value?: string;
};
