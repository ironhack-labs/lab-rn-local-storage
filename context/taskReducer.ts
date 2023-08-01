import {types, TaskState, ActionTypes} from '../types/types';

export const taskReducer = (
  state: TaskState,
  action: ActionTypes,
): TaskState => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };

    case types.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.task.id),
      };

    case types.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.task.id ? action.payload.task : task,
        ),
      };

    case types.IS_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case types.REHYDRATING:
      return action.payload;

    default:
      return state;
  }
};
