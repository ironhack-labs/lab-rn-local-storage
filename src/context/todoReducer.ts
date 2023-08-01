import { TodoState, todoInitialState } from './TodoContext';


type TodoAction = {type: 'createTask', payload:TodoState}


export const todoReducer = (state:TodoState[], action: TodoAction): TodoState[] => {

  switch (action.type) {
    case 'createTask':
      return [...state, action.payload];
  
    default:
      return state;
  }
}