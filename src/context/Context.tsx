import React, { createContext, useReducer } from 'react';
import { ITask } from '../types/types';

type ListState = {
  tasks: ITask[];
}

type ListAction =
  | { type: 'CREATE_TASK'; payload: ITask }
  | { type: 'DELETE_TASK'; payload: string }

interface ListContextProps {
  tasks: ITask[];
  createTask: (item: ITask) => void;
  deleteTask: (id: string) => void;
}

type ProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  tasks: [],
}

export const listReducer = (state: ListState, action: ListAction): ListState => {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload),
      }
    default:
      return state;
  }
};

export const AppContext = createContext<ListContextProps>({
  tasks: [],
  createTask: () => { },
  deleteTask: () => { },
});

export const ContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const createTask = (item: ITask) => {
    dispatch({ type: 'CREATE_TASK', payload: item });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, createTask, deleteTask }}>
      {children}
    </AppContext.Provider>
  )
}
