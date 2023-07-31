//import { IListItem } from '../../components/Content';
import { Task } from '../types/Task';
import {TaskContext, TaskState} from './TaskContext';

type CartAction =
  | {type: 'addTask', payload: Task}
  | {type: 'updateTaskStatus', payload : {status: 'pending' | 'to do' | 'correction' | 'completed', index: number}}
  | {type: 'addMultipleTasks', payload: Task[]}
  | {type: "removeTask", payload: number}

// generaEstado
export const taskReducer = (
  state: TaskState,
  action: CartAction,
): TaskState => {
  switch (action.type) {
    case 'addTask':
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
    case 'addMultipleTasks':
      return {
        ...state,
        items: [
          ...action.payload
        ]
      };

    case 'updateTaskStatus':
      return {
        ...state,
        items : state.items.map((item, i) => i === action.payload.index ? {...item, status: action.payload.status} : item)
      };

    case 'removeTask':
      return {
        ...state,
        items : state.items.filter((item, i) => i !== action.payload )
      };

    default:
      return state;
  }
};
