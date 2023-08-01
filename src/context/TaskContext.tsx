// src/context/TaskContext.tsx
import React, {createContext, useReducer, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task, ContextState} from '../types/taskTypes';

// Define el estado inicial
const initialState: ContextState = {
  tasks: [],
  categories: [],
};

// Define las acciones que se pueden realizar en las tareas y categorías
type Action =
  | {type: 'ADD_TASK'; payload: Task}
  | {type: 'UPDATE_TASK_STATUS'; payload: {taskId: number; completed: boolean}}
  | {type: 'ADD_CATEGORY'; payload: string}
  | {type: 'SELECT_CATEGORY'; payload: string}
  | {type: 'DELETE_TASK'; payload: number}
  | {type: 'LOAD_DATA'; payload: {tasks: Task[]; categories: string[]}};

// Define el reducer para manejar las acciones
const taskReducer = (state: ContextState, action: Action): ContextState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'UPDATE_TASK_STATUS':
      const {taskId, completed} = action.payload;
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === taskId ? {...task, completed} : task,
        ),
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

    case 'DELETE_TASK':
      const taskIdToDelete = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== taskIdToDelete),
      };

    case 'LOAD_DATA':
      return {
        ...state,
        tasks: action.payload.tasks,
        categories: action.payload.categories,
      };

    default:
      return state;
  }
};

// Crea el contexto de tareas
export const TaskContext = createContext<{
  state: ContextState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Asegurémonos de tipar adecuadamente el componente TaskProvider con las props de React
interface TaskProviderProps {
  children: ReactNode;
}

// Crea el proveedor del contexto
export const TaskProvider: React.FC<TaskProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Cargar datos desde AsyncStorage al montar el componente
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('taskData');
        if (storedData) {
          const {tasks, categories} = JSON.parse(storedData);
          dispatch({type: 'LOAD_DATA', payload: {tasks, categories}});
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  // Guardar datos en AsyncStorage al actualizar el estado
  useEffect(() => {
    const saveData = async () => {
      try {
        const dataToStore = JSON.stringify({
          tasks: state.tasks,
          categories: state.categories,
        });
        await AsyncStorage.setItem('taskData', dataToStore);
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    };

    saveData();
  }, [state]);

  return (
    <TaskContext.Provider value={{state, dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};
