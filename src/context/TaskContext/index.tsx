import {createContext} from 'react';
import {TasksContextState} from '../../types';
import {TasksContextProvider} from './TaskContextProvider';

const INITIAL_CTX_VALUE: TasksContextState = {
  tasks: [],
  addTask: () => {},
  updateTaskStatus: () => {},
  removeTask: () => {},
};

const TasksContext = createContext<TasksContextState>(INITIAL_CTX_VALUE);

export {TasksContext, TasksContextProvider};
