import {useReducer} from 'react';

import {
  AppState,
  appReducer,
  initialAppState,
  APP_TYPES,
  CompleteTaskAction,
  DeleteTaskAction,
  AddTaskAction,
} from './app-reducer';

type AppContextActions = {
  setSession: (appStsate: AppState) => void;
  addTask: (task: AddTaskAction['payload']['task']) => void;
  deleteTask: (task: DeleteTaskAction['payload']['id']) => void;
  completeTask: (task: CompleteTaskAction['payload']['id']) => void;
};

export type AppContext = AppState & AppContextActions;

export const initialContextValue: AppContext = {
  ...initialAppState,
  setSession: () => null,
  addTask: () => null,
  deleteTask: () => null,
  completeTask: () => null,
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
    deleteTask: taskId => {
      dispatch({type: APP_TYPES.DELETE_TASK, payload: {id: taskId}});
    },
    completeTask: taskId => {
      dispatch({type: APP_TYPES.COMPLETE_TASK, payload: {id: taskId}});
    },
  };

  return {
    state,
    actions: storeActions,
  };
};
