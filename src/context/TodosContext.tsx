import {Dispatch, PropsWithChildren, createContext, useReducer} from 'react';
import {STORAGE_KEYS, saveToStorage} from '../utils';

export type TodoProps = {
  title: string;
  category: string;
  completed: boolean;
  description: string;
};

type ReducerActions =
  | {
      type: typeof REDUCER_ACTIONS.ADD_TODO;
      payload: TodoProps;
    }
  | {
      type:
        | typeof REDUCER_ACTIONS.REMOVE_TODO
        | typeof REDUCER_ACTIONS.TOGGLE_TODO_STATUS;
      payload: {index: number};
    }
    | {
        type: typeof REDUCER_ACTIONS.SET_TODOS;
        payload: TodoProps[];
    };

export const REDUCER_ACTIONS = {
  ADD_TODO: 'addTodo' as const,
  REMOVE_TODO: 'removeTodo' as const,
  TOGGLE_TODO_STATUS: 'toggleTodoStatus' as const,
  SET_TODOS: 'setTodos' as const,
};

const todosReducer = (state: TodoProps[], action: ReducerActions) => {
  let newState = [...state];
  switch (action.type) {
    case REDUCER_ACTIONS.ADD_TODO:
      newState.push({...action.payload});
      saveToStorage(STORAGE_KEYS.TODO_LIST, JSON.stringify(newState));
      return newState;

    case REDUCER_ACTIONS.TOGGLE_TODO_STATUS:
      newState[action.payload.index].completed =
        !newState[action.payload.index].completed;
      saveToStorage(STORAGE_KEYS.TODO_LIST, JSON.stringify(newState));
      return newState;

    case REDUCER_ACTIONS.REMOVE_TODO:
      newState = state.filter((item, index) => index !== action.payload.index);
      saveToStorage(STORAGE_KEYS.TODO_LIST, JSON.stringify(newState));
      return newState;

    case REDUCER_ACTIONS.SET_TODOS:
        saveToStorage(STORAGE_KEYS.TODO_LIST, JSON.stringify(action.payload));
        return [...action.payload]

    default:
      saveToStorage(STORAGE_KEYS.TODO_LIST, JSON.stringify(state));
      return state;
  }
};

export const TodosContext = createContext<{
  todos: TodoProps[];
  dispatch: Dispatch<ReducerActions>;
}>({todos: [], dispatch: () => {}});

export const TodosContextProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosContext.Provider value={{todos: state, dispatch: dispatch}}>
      {children}
    </TodosContext.Provider>
  );
};
