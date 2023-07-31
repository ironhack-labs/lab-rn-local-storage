// context/TaskContext.tsx
import React, {createContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../types/Task';

type Action = {type: string; payload: any};

type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: [],
};

const TaskContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({state: initialState, dispatch: () => null});

const taskReducer = (state: State, action: Action): State => {
  const saveTasksToStorage = async (tasks: Task[]) => {
    try {
      const serializedTasks = JSON.stringify(tasks);
      await AsyncStorage.setItem('tasks', serializedTasks);
    } catch (error) {
      console.error('Error saving tasks to local storage:', error);
    }
  };

  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      saveTasksToStorage(newTasks); // Save the updated tasks to local storage
      return {...state, tasks: newTasks};
    case 'UPDATE_TASK_STATUS':
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id
          ? {...task, completed: action.payload.completed}
          : task,
      );
      saveTasksToStorage(updatedTasks); // Save the updated tasks to local storage
      return {...state, tasks: updatedTasks};
    case 'LOAD_TASKS':
      return {...state, tasks: action.payload};
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

const TaskProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const saveTasksToStorage = async (tasks: Task[]) => {
    try {
      const serializedTasks = JSON.stringify(tasks);
      await AsyncStorage.setItem('tasks', serializedTasks);
    } catch (error) {
      console.error('Error saving tasks to local storage:', error);
    }
  };

  const loadTasksFromStorage = async () => {
    try {
      const tasksFromStorage = await AsyncStorage.getItem('tasks');
      if (tasksFromStorage) {
        dispatch({type: 'LOAD_TASKS', payload: JSON.parse(tasksFromStorage)});
      }
    } catch (error) {
      console.error('Error loading tasks from local storage:', error);
    }
  };

  // Load tasks from local storage upon app initialization
  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  return (
    <TaskContext.Provider value={{state, dispatch}}>
      {children}
    </TaskContext.Provider>
  );
};

export {TaskContext, TaskProvider};
