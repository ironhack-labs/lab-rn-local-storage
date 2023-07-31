import {useContext} from 'react';
import {REDUCER_ACTIONS, TodoProps, TodosContext} from '../context';

export const useTodos = () => {
  const {todos, dispatch} = useContext(TodosContext);

  const addTodo = (todo: TodoProps) => {
    dispatch({type: REDUCER_ACTIONS.ADD_TODO, payload: todo});
  };

  const toggleTodo = (index: number) => {
    dispatch({type: REDUCER_ACTIONS.TOGGLE_TODO_STATUS, payload: {index}});
  };

  const deleteTodo = (index: number) => {
    dispatch({type: REDUCER_ACTIONS.REMOVE_TODO, payload: {index}});
  };

  const setTodos = (todoList: TodoProps[]) => {
    dispatch({type: REDUCER_ACTIONS.SET_TODOS, payload: todoList});
  };

  return {todos, addTodo, toggleTodo, deleteTodo, setTodos};
};
