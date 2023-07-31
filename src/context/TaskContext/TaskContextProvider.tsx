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
  const [{tasks, category}, dispatch] = useReducer(
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
      payload: {
        task,
      },
    });
  };

  const updateTaskStatus = async (taskId: number) => {
    dispatch({
      type: 'updateTaskStatus',
      payload: {
        taskId,
      },
    });
  };

  const removeTask = async (taskId: number) => {
    dispatch({
      type: 'removeTask',
      payload: {
        taskId,
      },
    });
  };

  const setCategoryFilter = (categoryFilter: string) => {
    dispatch({
      type: 'setCategoryFilter',
      payload: {
        category: categoryFilter,
      },
    });
  };

  const ctxValue: TasksContextState = {
    tasks,
    category,
    addTask,
    removeTask,
    updateTaskStatus,
    setCategoryFilter,
  };

  return <TasksContext.Provider {...props} value={ctxValue} />;
};
