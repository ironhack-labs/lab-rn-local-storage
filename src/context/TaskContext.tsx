import React, {createContext, useReducer, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../../types';

// Interfaces y tipos del context
interface TaskContextState {
  tasks: Task[];
  selectedCategory: string | null;
  categories: string[];
}

type TaskAction =
  | {type: 'ADD_TASK'; payload: Task}
  | {type: 'SET_TASKS'; payload: Task[]}
  | {type: 'SELECT_CATEGORY'; payload: string | null}
  | {type: 'SET_CATEGORIES'; payload: string[]};

interface TaskContextActions {
  addTask: (task: Task) => void;
  selectCategory: (category: string | null) => void;
}

type TaskContextType = TaskContextState &
  TaskContextActions & {
    dispatch: React.Dispatch<TaskAction>;
  };

const initialState: TaskContextState = {
  tasks: [],
  selectedCategory: null,
  categories: [],
};

const TaskContext = createContext<TaskContextType>({
  ...initialState,
  addTask: () => {},
  selectCategory: () => {},
  dispatch: () => {},
});

const taskReducer = (state: TaskContextState, action: TaskAction) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      saveTasksToStorage(newTasks);
      return {...state, tasks: newTasks};
    case 'SET_TASKS':
      return {...state, tasks: action.payload};
    case 'SELECT_CATEGORY':
      return {...state, selectedCategory: action.payload};
    case 'SET_CATEGORIES':
      return {...state, categories: action.payload};
    default:
      return state;
  }
};

// Guardado de las task desde asynstorage
const saveTasksToStorage = async (tasks: Task[]) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks...', error);
  }
};

// Carga de las task desde el asynstorage
const loadTasksFromStorage = async (dispatch: React.Dispatch<TaskAction>) => {
  try {
    const tasksString = await AsyncStorage.getItem('tasks');
    const tasks = tasksString ? (JSON.parse(tasksString) as Task[]) : [];
    dispatch({type: 'SET_TASKS', payload: tasks});

    const categories = [...new Set(tasks.map((task: Task) => task.category))];
    dispatch({type: 'SET_CATEGORIES', payload: categories});
  } catch (error) {
    console.error('Error loading tasks...', error);
  }
};

export const TaskProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    loadTasksFromStorage(dispatch);
  }, []);

  const addTask = (task: Task) => {
    dispatch({type: 'ADD_TASK', payload: task});
  };
  const selectCategory = (category: string | null) => {
    dispatch({type: 'SELECT_CATEGORY', payload: category});
  };

  return (
    <TaskContext.Provider value={{...state, addTask, selectCategory, dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
