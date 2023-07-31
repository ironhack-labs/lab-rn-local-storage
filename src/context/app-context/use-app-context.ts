import {useReducer} from 'react';

import {
  AppState,
  appReducer,
  initialAppState,
  APP_TYPES,
  UpdateTaskAction,
  AddTaskAction,
} from './app-reducer';

type AppContextActions = {
  addTask: (task: AddTaskAction['payload']['task']) => void;
  updateTask: (task: UpdateTaskAction['payload']['task']) => void;
};

export type AppContext = AppState & AppContextActions;

export const initialContextValue: AppContext = {
  ...initialAppState,
  addTask: () => null,
  updateTask: () => null,
};

export const useContextApp = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const storeActions: AppContextActions = {
    addTask: task => {
      dispatch({type: APP_TYPES.ADD_TASK, payload: {task}});
    },
    updateTask: task => {
      dispatch({type: APP_TYPES.UPDATE_TASK, payload: {task}});
    },
  };

  return {
    ...state,
    ...storeActions,
  } as AppContext;
};
