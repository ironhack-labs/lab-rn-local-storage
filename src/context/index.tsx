import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TASKS, CATEGORIES } from '../mock-tasks';
import { Task, TaskList } from '../types';

interface ProviderProps {
  children: React.ReactNode;
}

interface State {
  taskList: TaskList;
  categories: string[];
}

interface ContextProps {
  taskList: TaskList;
  categories: string[];
  addTask: (item: Task) => void;
  updateTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}

type Action =
  | { type: 'SET_DEFAULT_TASKS'; payload: { taskList: Task[] } }
  | { type: 'ADD_TASK'; payload: { task: Task } }
  | { type: 'UPDATE_TASK_STATUS'; payload: { id: string } }
  | { type: 'DELETE_TASK'; payload: { id: string } };

const taskReducer = (state: State, action: Action): State => {
  const { taskList } = state;

  switch (action.type) {
    case 'SET_DEFAULT_TASKS':
      return {
        ...state,
        taskList: action.payload.taskList,
      };
    case 'ADD_TASK':
      return {
        ...state,
        taskList: [...taskList, action.payload.task],
      };
    case 'UPDATE_TASK_STATUS':
      return {
        ...state,
        taskList: taskList.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        taskList: taskList.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const TaskListContext = createContext<ContextProps>({
  taskList: [],
  categories: [],
  addTask: () => {},
  updateTaskStatus: () => {},
  deleteTask: () => {},
});

export function TaskProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, {
    taskList: [],
    categories: CATEGORIES,
  });

  const addTask = async (task: Task) => {
    const dataFromStorage = await AsyncStorage.getItem(
      'RN_LAB_LOCAL_STORAGE::taskList',
    );
    if (dataFromStorage) {
      const data = JSON.parse(dataFromStorage);
      const updatedData = { ...data, task };
      await AsyncStorage.setItem(
        'RN_LAB_LOCAL_STORAGE::taskList',
        JSON.stringify(updatedData),
      );
    }

    dispatch({ type: 'ADD_TASK', payload: { task } });
  };

  const updateTaskStatus = async (id: string) => {
    const dataFromStorage = await AsyncStorage.getItem(
      'RN_LAB_LOCAL_STORAGE::taskList',
    );
    if (dataFromStorage) {
      const data = JSON.parse(dataFromStorage);
      const updatedData = data.map((item: Task) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });

      await AsyncStorage.setItem(
        'RN_LAB_LOCAL_STORAGE::taskList',
        JSON.stringify(updatedData),
      );
    }

    dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id } });
  };

  const deleteTask = async (id: string) => {
    const dataFromStorage = await AsyncStorage.getItem(
      'RN_LAB_LOCAL_STORAGE::taskList',
    );
    if (dataFromStorage) {
      const data: TaskList = JSON.parse(dataFromStorage);
      const updatedData = data.filter((item: Task) => item.id !== id);

      await AsyncStorage.setItem(
        'RN_LAB_LOCAL_STORAGE::taskList',
        JSON.stringify(updatedData),
      );
    }

    dispatch({ type: 'DELETE_TASK', payload: { id } });
  };

  useEffect(() => {
    async function setDefaultData() {
      /**
       * Trata de obtener la lista del storage del dispositivo,
       * Si la lista ya existia la pasa al contexto y si no entonces
       * toma la lista por decto del archivo mock-tasks
       */
      const dataFromStorage = await AsyncStorage.getItem(
        'RN_LAB_LOCAL_STORAGE::taskList',
      );

      if (dataFromStorage === null || dataFromStorage === '[]') {
        await AsyncStorage.setItem(
          'RN_LAB_LOCAL_STORAGE::taskList',
          JSON.stringify(TASKS),
        );

        dispatch({
          type: 'SET_DEFAULT_TASKS',
          payload: { taskList: TASKS },
        });
      } else {
        const taskList = JSON.parse(dataFromStorage);

        dispatch({
          type: 'SET_DEFAULT_TASKS',
          payload: { taskList },
        });
      }
    }

    setDefaultData();
  }, []);

  return (
    <TaskListContext.Provider
      value={{ ...state, addTask, updateTaskStatus, deleteTask }}>
      {children}
    </TaskListContext.Provider>
  );
}
