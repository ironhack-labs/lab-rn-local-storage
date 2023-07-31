import React from 'react';
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

  const setTasks = async () => {
    try {
      const localTasks = await getLocalStorageItem<Task[]>('tasks');
      dispatch({
        type: 'setTasks',
        payload: {
          tasks: localTasks,
        },
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

    await setLocalStorageItem('tasks', [...tasks, task]);
  };

  const updateTaskStatus = async (taskId: number) => {
    dispatch({
      type: 'updateTaskStatus',
      payload: {taskId},
    });
    await setLocalStorageItem('tasks', [...tasks]);
  };

  const removeTask = async (taskId: number) => {
    dispatch({
      type: 'removeTask',
      payload: {taskId},
    });

    await setLocalStorageItem(
      'tasks',
      tasks.filter(({id}) => id !== taskId),
    );
  };

  const ctxValue: TasksContextState = {
    tasks,
    addTask,
    removeTask,
    updateTaskStatus,
    setTasks,
  };

  return <TasksContext.Provider {...props} value={ctxValue} />;
};
