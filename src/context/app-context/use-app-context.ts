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
  setSession: (appStsate: AppState) => void;
  addTask: (task: AddTaskAction['payload']['task']) => void;
  updateTask: (task: UpdateTaskAction['payload']['task']) => void;
};

export type AppContext = AppState & AppContextActions;

export const initialContextValue: AppContext = {
  ...initialAppState,
  setSession: () => null,
  addTask: () => null,
  updateTask: () => null,
};

export const useContextApp = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const storeActions: AppContextActions = {
    setSession: appState => {
      dispatch({type: APP_TYPES.REHYDRATE, payload: appState});
    },
    addTask: task => {
      dispatch({type: APP_TYPES.ADD_TASK, payload: {task}});
    },
    updateTask: task => {
      dispatch({type: APP_TYPES.UPDATE_TASK, payload: {task}});
    },
  };

  return {
    state,
    actions: storeActions,
  };
};
