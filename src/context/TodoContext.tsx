import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

export interface TodoState {
  id: number;
  title: string,
  category: string,
  description: string;
  done: boolean;
};

export interface TodoContextProps {
  todoState: TodoState[];
  createTask: (task: TodoState) => void;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
  filterTask: (category: string) => void;
  allTasks: () => void;
}

export const todoInitialState: TodoState[] = []

export const storeTodo = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(todoInitialState));
    console.log('Todos stored successfully.');
  } catch (error) {
    console.log('Error storing Todos:', error);
  }
};

export const retireveTodo = async (): Promise<TodoState[] | null> => {
  try {
    const todos = await AsyncStorage.getItem('todos');
    return todos !== null ? JSON.parse(todos) : null;
  } catch (error) {
    console.log('Error retrieving Todos:', error);
    return null;
  }
}

export const TodoContext = createContext({} as TodoContextProps);

export const TodoProvider = ({children}: {children: JSX.Element[]}) => {

  const [todoState, dispatch] = useReducer(todoReducer, todoInitialState);

  const createTask = (task:TodoState) => {
    dispatch({
      type: 'createTask',
      payload: task
    })
  }

  const deleteTask = (id: number) => {
    dispatch({
      type: 'deleteTask',
      payload: id
    })
  }

  const completeTask = (id: number) => {
    dispatch({
      type: 'completeTask',
      payload: id
    })
  }

  const filterTask = (category: string) => {
    dispatch({
      type: 'filterTask',
      payload: category
    })
  }

  const allTasks = () => {
    dispatch({
      type: 'allTasks'
    })
  };

  const dispatchStoreTodos = async () => {
    await storeTodo();
  }


  useEffect(() => {
    dispatchStoreTodos();
    retireveTodo().then(response => {
      dispatch({
        type: 'updateTodos',
        payload: response || []
      })
    })
  })

  return (
    <TodoContext.Provider value={{
      todoState,
      createTask,
      deleteTask,
      completeTask,
      filterTask,
      allTasks,
    }}>
      {children}
    </TodoContext.Provider>
  )
}