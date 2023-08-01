import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  CATEGORIES_KEY,
  TASKS_KEY,
  getStorageItem,
  removeStorageItem,
  storeStorageItem,
} from '../helpers/storage';

export type TaskT = {
  id: string;
  title: string;
  category: string;
  description: string;
  completion: boolean;
};

type TaskStateT = {
  list: TaskT[];
  filters: string[];
  categories: string[];
  addTask: (task: TaskT) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: TaskT) => void;
  addCategory: (category: string) => void;
  updateFilters: (filters: string[]) => void;
};

type ReducerStateT = {
  list: TaskT[];
  filters: string[];
  categories: string[];
};

const initialTaskReducerValue = {
  list: [],
  filters: [],
  categories: [],
};

const initialTaskValue = {
  list: [],
  filters: [],
  categories: [],
  addTask: (task: TaskT) => {},
  deleteTask: (id: string) => {},
  updateTask: (task: TaskT) => {},
  addCategory: (category: string) => {},
  updateFilters: (filters: string[]) => {},
};

type ActionT =
  | {type: 'ADD_TASK'; payload: {task: TaskT}}
  | {type: 'DELETE_TASK'; payload: {tasks: TaskT[]}}
  | {type: 'UPDATE_TASK'; payload: {task: TaskT}}
  | {type: 'UPDATE_TASKS'; payload: {tasks: TaskT[]}}
  | {type: 'ADD_CATEGORY'; payload: {category: string}}
  | {type: 'SELECT_CATEGORIES'; payload: {filters: string[]}}
  | {type: 'UPDATE_CATEGORIES'; payload: {categories: string[]}};

const TaskContext = createContext<TaskStateT>(initialTaskValue);

function taskReducer(
  state: ReducerStateT = initialTaskReducerValue,
  action: ActionT,
): ReducerStateT {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        list: [...state.list, action.payload.task],
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload.category],
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        list: state.list.map(task =>
          task.id !== action.payload.task.id ? task : action.payload.task,
        ),
      };
    case 'UPDATE_TASKS':
      return {...state, list: action.payload.tasks};
    case 'UPDATE_CATEGORIES':
      return {...state, categories: action.payload.categories};
    case 'DELETE_TASK':
      return {
        ...state,
        list: action.payload.tasks,
      };
    case 'SELECT_CATEGORIES':
      return {...state, filters: action.payload.filters};
    default: {
      throw new Error(`Unhandled action type: ${action['type']}`);
    }
  }
}

function TaskProvider({children}: {children: ReactNode}) {
  const [{list, categories, filters}, dispatch] = useReducer(
    taskReducer,
    initialTaskReducerValue,
  );

  const addTask = (task: TaskT) => {
    storeStorageItem(TASKS_KEY, task);
    dispatch({type: 'ADD_TASK', payload: {task}});
  };

  const updateTask = (task: TaskT) => {
    dispatch({type: 'UPDATE_TASK', payload: {task}});
  };

  const deleteTask = (id: string) => {
    const tasks = list.filter(task => task.id !== id);
    removeStorageItem(TASKS_KEY, tasks);
    dispatch({type: 'DELETE_TASK', payload: {tasks}});
  };

  const addCategory = (category: string) => {
    storeStorageItem(CATEGORIES_KEY, category);
    dispatch({type: 'ADD_CATEGORY', payload: {category}});
  };

  const updateFilters = (filters: string[]) => {
    dispatch({type: 'SELECT_CATEGORIES', payload: {filters}});
  };

  const value = {
    list,
    addTask,
    filters,
    deleteTask,
    updateTask,
    categories,
    addCategory,
    updateFilters,
  };

  useEffect(() => {
    getStorageItem(CATEGORIES_KEY).then((result = []) => {
      const categories = result || [];
      dispatch({type: 'UPDATE_CATEGORIES', payload: {categories}});
    });

    getStorageItem(TASKS_KEY).then(result => {
      const tasks = result || [];
      dispatch({type: 'UPDATE_TASKS', payload: {tasks}});
    });
  }, []);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

function useTask() {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider');
  }

  return context;
}

export {TaskProvider, useTask};
