import {createContext} from 'react';
import {TaskContextValue} from '../types/types';

export const initialValue: TaskContextValue = {
  state: {
    tasks: [],
    loading: true,
  },
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  isLoading: () => {},
};

export const TaskContext = createContext<TaskContextValue>(initialValue);
