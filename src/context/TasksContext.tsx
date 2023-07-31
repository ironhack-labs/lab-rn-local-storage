import React, { createContext, useReducer, useContext, Dispatch, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/Task';

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
  | { type: 'SELECT_CATEGORY'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: number }
  | { type: 'LOAD_TASKS'; payload: Task[] };

type TasksDispatch = Dispatch<Action>;

const TASKS_STORAGE_KEY = '@tasks';

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
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'LOAD_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

const TasksProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: [], categories: [], selectedCategory: null });

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        if (storedTasks) {
          const tasksFromStorage = JSON.parse(storedTasks);
          dispatch({ type: 'LOAD_TASKS', payload: tasksFromStorage });
        }
      } catch (error) {
        console.log('Error loading tasks from storage:', error);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(state.tasks));
      } catch (error) {
        console.log('Error saving tasks to storage:', error);
      }
    };
    saveTasks();
  }, [state.tasks]);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>{children}</TasksContext.Provider>
  );
};

const useTasksContext = () => useContext(TasksContext);

export { TasksProvider, useTasksContext };
