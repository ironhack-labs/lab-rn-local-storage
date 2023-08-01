import { TodoState, todoInitialState } from './TodoContext';


type TodoAction = | {type: 'createTask', payload:TodoState}
                  | {type: 'deleteTask', payload:number}
                  | {type: 'completeTask', payload:number};


export const todoReducer = (state:TodoState[], action: TodoAction): TodoState[] => {

  switch (action.type) {
    case 'createTask':
      return [...state, action.payload];
    

    case 'deleteTask':
      return state.filter(todo => todo.id !== action.payload)


    case 'completeTask':
      return state.map(todo => {
        if(todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })


    default:
      return state;
  }
}