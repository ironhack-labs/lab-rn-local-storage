import { TodoState, todoInitialState } from './TodoContext';


type TodoAction = {type: 'signIn'}


export const todoReducer = (state:TodoState[], action: TodoAction): TodoState[] => {

  switch (action.type) {
    case 'signIn':
      return [...state, {
        id: 3,
        title: 'Pollos a la carta',
        category: 'Comida',
        description: 'Comprar pollos',
        done: false
      }];
  
    default:
      return state;
  }
}