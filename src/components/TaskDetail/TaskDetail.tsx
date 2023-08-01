import React, { useContext } from 'react'
import { CardTodo } from '../CardTodo'
import { TodoContext } from '../../context/TodoContext';

export const TaskDetail = () => {
  const {deleteTask, completeTask} = useContext(TodoContext);

  const handleDeleteTask = (id: number) => {
    deleteTask(id)
  }

  return (
    <CardTodo 
      detail 
      onDeleteTask={handleDeleteTask}
      onCompleteTask={completeTask}
    />
  )
}
