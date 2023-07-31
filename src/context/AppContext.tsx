import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react';

import type {NewTask, Task} from '../types/Task.type';

import {getData, saveData} from '../helpers/storage';

// const INITIAL_TASKS: Task[] = [
//   {
//     id: 1,
//     title: 'Task 1',
//     description: 'Description 1',
//     completed: true,
//     category: 'work',
//   },
//   {
//     id: 2,
//     title: 'Task 2',
//     description: 'Description 2',
//     completed: false,
//     category: 'ironhack',
//   },
// ];

type AppState = {
  tasks: Task[];
  showFilterModal: boolean;
  activeCategory: string | null;
  addTask: (newTask: NewTask) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  getCategories: () => string[];
  toggleFilterModal: () => void;
  setActiveCategory: (category: string | null) => void;
};

type ACTION_TYPE =
  | {type: 'SET_TASKS'; payload: Task[]}
  | {type: 'ADD_TASK'; payload: Task}
  | {type: 'UPDATE_TASK'; payload: Task}
  | {type: 'DELETE_TASK'; payload: number}
  | {type: 'TOGGLE_TASK'; payload: number}
  | {type: 'SET_ACTIVE_CATEGORY'; payload: string | null}
  | {type: 'TOGGLE_FILTER_MODAL'};

type AppProviderProps = PropsWithChildren<{}>;

const initialState: AppState = {
  tasks: [],
  activeCategory: null,
  showFilterModal: false,
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  getCategories: () => [],
  toggleFilterModal: () => {},
  setActiveCategory: () => {},
};

const reducer = (state: AppState, action: ACTION_TYPE): AppState => {
  switch (action.type) {
    case 'SET_TASKS':
      return {...state, tasks: action.payload};
    case 'ADD_TASK':
      return {...state, tasks: [...state.tasks, action.payload]};
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return {...task, completed: !task.completed};
          }
          return task;
        }),
      };
    case 'SET_ACTIVE_CATEGORY':
      return {...state, activeCategory: action.payload};
    case 'TOGGLE_FILTER_MODAL':
      return {...state, showFilterModal: !state.showFilterModal};
    default:
      return state;
  }
};

export const AppContext = createContext<AppState>(initialState);

const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    searchSavedTasks();
  }, []);

  useEffect(() => {
    saveData('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const searchSavedTasks = async () => {
    const tasks = await getData('tasks');

    if (tasks) {
      const parsedTasks = JSON.parse(tasks);

      dispatch({type: 'SET_TASKS', payload: parsedTasks});
    }
  };

  const addTask = (newTask: NewTask) =>
    dispatch({
      type: 'ADD_TASK',
      payload: {...newTask, id: state.tasks.length + 1},
    });

  const updateTask = (updatedTask: Task) =>
    dispatch({type: 'UPDATE_TASK', payload: updatedTask});

  const deleteTask = (taskId: number) =>
    dispatch({type: 'DELETE_TASK', payload: taskId});

  const toggleTask = (taskId: number) =>
    dispatch({type: 'TOGGLE_TASK', payload: taskId});

  const toggleFilterModal = () => dispatch({type: 'TOGGLE_FILTER_MODAL'});

  const setActiveCategory = (category: string | null) =>
    dispatch({type: 'SET_ACTIVE_CATEGORY', payload: category});

  const getCategories = useCallback((): string[] => {
    const categories = state.tasks.map((task: Task) => task.category);

    const uniqueCategories = [...new Set(categories)];

    return uniqueCategories;
  }, [state.tasks]);

  return (
    <AppContext.Provider
      value={{
        tasks: state.tasks,
        showFilterModal: state.showFilterModal,
        activeCategory: state.activeCategory,
        addTask,
        updateTask,
        deleteTask,
        toggleTask,
        toggleFilterModal,
        setActiveCategory,
        getCategories,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
