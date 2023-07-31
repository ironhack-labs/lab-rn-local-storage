import type {Task} from '../../types';
import {v4 as uuidv4} from 'uuid';

// NOTE: temporal mock
import {TASKS_DATA} from '../../__mocks__';

export type AppState = {
  tasks: Task[];
  filters: Task['category'][];
};

export const initialAppState: AppState = {
  tasks: TASKS_DATA,
  filters: [],
};

export enum APP_TYPES {
  REHYDRATE = 'REHYDRATE',
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
  TOGGLE_TASK_FILTER = 'TOGGLE_TASK_FILTER',
}

export type RehydrateAction = {
  type: APP_TYPES.REHYDRATE;
  payload: AppState;
};

export type AddTaskAction = {
  type: APP_TYPES.ADD_TASK;
  payload: {task: Omit<Task, 'id' | 'status'>};
};

export type DeleteTaskAction = {
  type: APP_TYPES.DELETE_TASK;
  payload: {id: Task['id']};
};

export type CompleteTaskAction = {
  type: APP_TYPES.COMPLETE_TASK;
  payload: {id: Task['id']};
};

export type ToggleTaskAction = {
  type: APP_TYPES.TOGGLE_TASK_FILTER;
  payload: {filter: Task['category']};
};

type AppTypeActions =
  | RehydrateAction
  | AddTaskAction
  | DeleteTaskAction
  | CompleteTaskAction
  | ToggleTaskAction;

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
          id: uuidv4(),
          status: 'pending',
          ...action.payload.task,
        }),
      };
    case APP_TYPES.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({id}) => id !== action.payload.id),
      };
    case APP_TYPES.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              status: 'completed',
            };
          }

          return task;
        }),
      };
    case APP_TYPES.TOGGLE_TASK_FILTER:
      return {
        ...state,
        filters: state.filters.includes(action.payload.filter)
          ? state.filters.filter(filter => filter !== action.payload.filter)
          : [...state.filters].concat(action.payload.filter),
      };
    default:
      return state;
  }
};
