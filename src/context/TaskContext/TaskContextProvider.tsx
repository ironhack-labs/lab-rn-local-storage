import React from 'react';
import {useReducer} from 'react';
import {TasksContext} from '.';
import {initialTasksReducerValue, tasksReducer} from './taskReducer';
import {Task, TasksContextState} from '../../types';

export const TasksContextProvider = ({...props}) => {
  const [{tasks}, dispatch] = useReducer(
    tasksReducer,
    initialTasksReducerValue,
  );

  const addTask = (task: Task) => {
    dispatch({
      type: 'addTask',
      payload: {task},
    });
  };

  const updateTaskStatus = (taskId: number) => {
    dispatch({
      type: 'updateTaskStatus',
      payload: {taskId},
    });
  };

  const removeTask = (taskId: number) => {
    dispatch({
      type: 'removeTask',
      payload: {taskId},
    });
  };

  const ctxValue: TasksContextState = {
    tasks,
    addTask,
    removeTask,
    updateTaskStatus,
  };

  return <TasksContext.Provider {...props} value={ctxValue} />;
};
