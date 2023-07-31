import React, { createContext, useContext, useReducer } from 'react';
import { Task, TaskList } from '../types';

interface ProviderProps {
  children: React.ReactNode;
}

interface State {
  taskList: TaskList;
}

interface ContextProps {
  taskList: TaskList;
  addTask: (item: Task) => void;
  updateTaskStatus: (id: string) => void;
}

type Action =
  | { type: 'ADD_TASK'; payload: { task: Task } }
  | { type: 'UPDATE_TASK_STATUS'; payload: { id: string } };

const taskReducer = (state: State, action: Action): State => {
  const { taskList } = state;

  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        taskList: [...taskList, action.payload.task],
      };
    case 'UPDATE_TASK_STATUS':
      return {
        ...state,
        taskList: taskList.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export const TaskListContext = createContext<ContextProps>({
  taskList: [],
  addTask: () => {},
  updateTaskStatus: () => {},
});

export function TaskProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, { taskList: [] });

  const addTask = (task: Task) =>
    dispatch({ type: 'ADD_TASK', payload: { task } });

  const updateTaskStatus = (id: string) =>
    dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id } });

  return (
    <TaskListContext.Provider value={{ ...state, addTask, updateTaskStatus }}>
      {children}
    </TaskListContext.Provider>
  );
}

export function useTaskList() {
  const cartContext = useContext(TaskListContext);

  return {
    ...cartContext,
  };
}
