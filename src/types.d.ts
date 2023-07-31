import {TextInputProps} from 'react-native';
import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

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
  category: string;
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: number) => void;
  removeTask: (taskId: number) => void;
  setCategoryFilter: (category: string) => void;
};

export type TasksReducerState = {
  tasks: Task[];
  category: string;
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
    }
  | {
      type: 'setCategoryFilter';
      payload: {category: string};
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

export type TaskListItemProps = {task: Task};

export type ButtonProps = {
  color: string;
  title: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
};
