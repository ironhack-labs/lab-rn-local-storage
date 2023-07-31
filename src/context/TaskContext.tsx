import React, {createContext, useEffect, useReducer} from 'react';
import {taskReducer} from './TaskReducer';
import {Task, testData} from '../types/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface TaskState {
  items: Task[];
  showTask: boolean;
}

export const authInitialState: TaskState = {
  items: [],
  showTask: false,
};

export interface AuthContextProps {
  TaskState: TaskState;
  addTask : (task : Task) => void;
  markAsCompleted : (index: number) => void;
  deleteTask : (indeX: number) => void;
}

export const TaskContext = createContext({} as AuthContextProps);

export const TaskProvider = ({children}: any) => {
  const [TaskState, dispatch] = useReducer(taskReducer, authInitialState);

  useEffect(() => {
    setTasksData();
  }, []);

  useEffect(() => {
    storeTasksData(TaskState.items);
  }, [TaskState.items])
  

  const addTask = (task : Task) => {
    const currentData = [...TaskState.items]
    currentData.push(task)
    dispatch({type: "addTask", payload: task})
  }

  const markAsCompleted = (index: number) => {
    dispatch({type: "updateTaskStatus", payload : {status: "completed", index: index}})
  }

  const deleteTask = (index: number) => {
    dispatch({type: "removeTask", payload : index})
  }

  const setTasksData = async () => {
    try {
      const tasksData = testData;
      const customData = await getData();
      if(customData){
        dispatch({type: 'addMultipleTasks', payload: customData});
      }else{
        dispatch({type: 'addMultipleTasks', payload: tasksData});
      }
      
    } catch (error) {}
  };

  const storeTasksData = async (value: Object) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('tasks', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('tasks');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        TaskState,
        addTask,
        markAsCompleted,
        deleteTask
      }}>
      {children}
    </TaskContext.Provider>
  );
};
