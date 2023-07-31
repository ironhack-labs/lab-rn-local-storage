import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import { Task } from '../types/Task';

// Define los tipos para el estado y las acciones relacionadas con las tareas
interface TasksState {
  tasks: Task[];
}

type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: { id: number; completed: boolean } }
  | { type: 'DELETE_TASK'; payload: number };

type TasksDispatch = Dispatch<Action>;

// Crear el contexto
const TasksContext = createContext<{ state: TasksState; dispatch: TasksDispatch }>({
  state: { tasks: [] },
  dispatch: () => {},
});

// Reducer para manejar las acciones relacionadas con las tareas
const tasksReducer = (state: TasksState, action: Action): TasksState => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK':
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: action.payload.completed } : task
        ),
      };
    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

// Proveedor de contexto
const TasksProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: [] });

  return (
    <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>
  );
};

// Función personalizada para usar el contexto
const useTasksContext = () => useContext(TasksContext);

export { TasksProvider, useTasksContext };
