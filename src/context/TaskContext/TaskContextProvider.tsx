import React, {useEffect} from 'react';
import {useReducer} from 'react';
import {TasksContext} from '.';
import {initialTasksReducerValue, tasksReducer} from './taskReducer';
import {Task, TasksContextState} from '../../types';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../services/localStorage';

export const TasksContextProvider = ({...props}) => {
  const [{tasks}, dispatch] = useReducer(
    tasksReducer,
    initialTasksReducerValue,
  );

  useEffect(() => {
    setTasks();
  }, []);

  useEffect(() => {
    setLocalStorageItem('tasks', [...tasks]);
  }, [tasks]);

  const setTasks = async () => {
    try {
      const localTasks = await getLocalStorageItem<Task[]>('tasks');
      dispatch({
        type: 'setTasks',
        payload: {tasks: localTasks},
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (task: Task) => {
    dispatch({
      type: 'addTask',
      payload: {task},
    });
  };

  const updateTaskStatus = async (taskId: number) => {
    dispatch({
      type: 'updateTaskStatus',
      payload: {taskId},
    });
  };

  const removeTask = async (taskId: number) => {
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
