import React, { createContext, useReducer } from "react";
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
}

export const todoInitialState: TodoState[] =  [
  {
    id: new Date().getTime() * 3,
    title: 'Ir a correr',
    category: 'Deporte',
    description: 'Salir a correr 10 km al parque',
    done: false
  },
  {
    id: new Date().getTime() * 4,
    title: 'Ir a nadar',
    category: 'Deporte',
    description: 'Ir a nadar y hacer 5km para superar la marca de ayer',
    done: false
  },
  {
    id: new Date().getTime() * 5,
    title: 'Ir al gimnasio',
    category: 'Deporte',
    description: 'Ir al gimnasio y aumentar el peso',
    done: false
  },
  {
    id: new Date().getTime() * 6,
    title: 'Comprar Juego',
    category: 'Ocio',
    description: 'Comprar juego de Super Smash y probarlo',
    done: false
  },
  {
    id: new Date().getTime() * 7,
    title: 'Estudiar C++',
    category: 'Aprendizaje',
    description: 'Estudiar C++ y crar un space invaders',
    done: false
  },
  {
    id: new Date().getTime() * 8,
    title: 'Estudiar Unity',
    category: 'Aprendizaje',
    description: 'Estudiar Unity y publicar mi primer juego',
    done: false
  },
  {
    id: new Date().getTime() * 9,
    title: 'Estudiar UE',
    category: 'Aprendizaje',
    description: 'Estudiar UE - aprender shaders',
    done: false
  },
  {
    id: new Date().getTime() * 10,
    title: 'Terminar el gears',
    category: 'Ocio',
    description: 'Terminar Gears of War 4 con mis amigos',
    done: false
  },
]

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

  return (
    <TodoContext.Provider value={{
      todoState,
      createTask,
      deleteTask,
      completeTask
    }}>
      {children}
    </TodoContext.Provider>
  )
}