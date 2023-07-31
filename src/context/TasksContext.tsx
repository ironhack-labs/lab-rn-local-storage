import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { Task } from '../types/Task';

// Define los tipos para el estado y las acciones relacionadas con las tareas y categorías
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

// Crear el contexto
const TasksContext = createContext<{ state: TasksState; dispatch: TasksDispatch }>({
  state: { tasks: [], categories: [], selectedCategory: null },
  dispatch: () => {},
});

// Reducer para manejar las acciones relacionadas con las tareas y categorías
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

// Proveedor de contexto
const TasksProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: [], categories: [], selectedCategory: null });

  return (
    <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>
  );
};

// Función personalizada para usar el contexto
const useTasksContext = () => useContext(TasksContext);

export { TasksProvider, useTasksContext };
