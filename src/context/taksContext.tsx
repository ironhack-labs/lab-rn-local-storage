import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { Task } from '../types/taks';

interface TasksState {
  tasks: Task[];
  categories: string[];
  selectedCategory: string | null;
}

type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: { id: number; completed: boolean } }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'ADD_CATEGORY'; payload: string }
  | { type: 'SELECT_CATEGORY'; payload: string };

type TasksDispatch = Dispatch<Action>;

const TasksContext = createContext<{ state: TasksState; dispatch: TasksDispatch }>({
  state: { tasks: [], categories: [], selectedCategory: null },
  dispatch: () => {},
});

const tasksReducer = (state: TasksState, action: Action): TasksState => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: action.payload.completed } : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

const TasksProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: [], categories: [], selectedCategory: null });

  return (
    <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>
  );
};

const useTasksContext = () => useContext(TasksContext);

export { TasksProvider, useTasksContext };