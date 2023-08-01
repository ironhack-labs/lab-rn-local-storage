/* eslint-disable react/react-in-jsx-scope */
import {ReactNode, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {taskReducer} from './taskReducer';
import {types, Task, TaskState} from '../types/types';
import {TaskContext} from './TaskContext';

interface TaskProviderProps {
  children: ReactNode;
}

const TaskInitialState: TaskState = {
  tasks: [],
  loading: true,
};

const initialStateFromStorage = async (): Promise<TaskState> => {
  try {
    const tasksValue = await AsyncStorage.getItem('tasks');
    return tasksValue ? JSON.parse(tasksValue) : TaskInitialState;
  } catch (error) {
    console.log(error);
    return TaskInitialState;
  }
};

export const TaskProvider = ({children}: TaskProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, TaskInitialState);

  const addTask = (task: Task) => {
    const action = {
      type: types.ADD_TASK,
      payload: {task},
    };
    dispatch(action);
  };

  const deleteTask = (task: Task) => {
    const action = {
      type: types.DELETE_TASK,
      payload: {task},
    };
    dispatch(action);
  };

  const updateTask = (task: Task) => {
    const action = {
      type: types.UPDATE_TASK,
      payload: {task},
    };
    dispatch(action);
  };

  const isLoading = () => {
    const action = {
      type: types.IS_LOADING,
      payload: {loading: true},
    };
    dispatch(action);
  };

  useEffect(() => {
    const rehydrate = async () => {
      const storedData = await initialStateFromStorage();
      if (storedData) {
        dispatch({type: types.REHYDRATING, payload: storedData});
      }
    };

    rehydrate();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('tasks', JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider
      value={{state, addTask, deleteTask, updateTask, isLoading}}>
      {children}
    </TaskContext.Provider>
  );
};
