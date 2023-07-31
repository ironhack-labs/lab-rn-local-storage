import {createContext, useContext, useReducer} from 'react';
import {Action, Task} from '../types/types';

type AppState = {
  tasks: Task[];
  addTask: (taks: Task) => void;
};

const initialState: AppState = {
  tasks: [],
  addTask: () => {},
};

const AppReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      break;
  }
  return state;
};

const AppContext = createContext<AppState>(initialState);

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [{tasks}, dispatch] = useReducer(AppReducer, initialState);

  const addTask = (task: Task) => {
    dispatch({type: 'ADD_TASK', payload: task});
  };

  const value = {tasks, addTask};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser utilizado dentro de AppProvider');
  }
  return context;
};
