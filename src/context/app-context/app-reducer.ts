import type {Task} from '../../types';
// NOTE: temporal mock
import {TASKS_DATA} from '../../__mocks__';

export type AppState = {
  tasks: Task[];
};

export const initialAppState: AppState = {
  tasks: TASKS_DATA,
};

export enum APP_TYPES {
  REHYDRATE = 'REHYDRATE',
  ADD_TASK = 'ADD_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
}

export type RehydrateAction = {
  type: APP_TYPES.REHYDRATE;
  payload: AppState;
};

export type AddTaskAction = {
  type: APP_TYPES.ADD_TASK;
  payload: {task: Omit<Task, 'id'>};
};

export type UpdateTaskAction = {
  type: APP_TYPES.UPDATE_TASK;
  payload: {task: Partial<Task>};
};

type AppTypeActions = RehydrateAction | AddTaskAction | UpdateTaskAction;

export const appReducer = (
  state: AppState,
  action: AppTypeActions,
): AppState => {
  switch (action.type) {
    case APP_TYPES.REHYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case APP_TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks].concat({
          id: 'random-id', // TODO: generare random id
          ...action.payload.task,
        }),
      };
    case APP_TYPES.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.task.id) {
            return {
              ...task,
              ...action.payload.task,
            };
          }

          return task;
        }),
      };
    default:
      return state;
  }
};
