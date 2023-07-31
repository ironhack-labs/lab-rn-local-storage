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
  addTask: (newTask: NewTask) => void;
};

type ACTION_TYPE =
  | {type: 'SET_TASKS'; payload: Task[]}
  | {type: 'ADD_TASK'; payload: Task}
  | {type: 'UPDATE_TASK'; payload: Task}
  | {type: 'DELETE_TASK'; payload: number};

type AppProviderProps = PropsWithChildren<{}>;

const initialState: AppState = {
  tasks: [],
  addTask: () => {},
};

const reducer = (state: AppState, action: ACTION_TYPE): AppState => {
  switch (action.type) {
    case 'SET_TASKS':
      return {...state, tasks: action.payload};
    case 'ADD_TASK':
      return {...state, tasks: [...state.tasks, action.payload]};
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
      dispatch({type: 'SET_TASKS', payload: JSON.parse(tasks)});
    }
  };

  const addTask = (newTask: NewTask) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {...newTask, id: state.tasks.length + 1},
    });
  };

  return (
    <AppContext.Provider value={{tasks: state.tasks, addTask}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
