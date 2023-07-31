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

  const updateTask = (task: Task) => {
    dispatch({
      type: 'updateTask',
      payload: {task},
    });
  };

  const ctxValue: TasksContextState = {
    tasks,
    addTask,
    updateTask,
  };

  return <TasksContext.Provider {...props} value={ctxValue} />;
};
