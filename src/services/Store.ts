import {createContext, useEffect, useReducer} from 'react';
import {INITIAL_STATE} from './Constants';
import {ITasksContext} from './Interface';
import TasksReducer from './Reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TasksActions from './Actions';

export const TasksContext = createContext<ITasksContext>(INITIAL_STATE);
export const TasksDispatchContext = createContext(null as any);

const UseStore = () => {
  const [tasks, dispatch] = useReducer(TasksReducer, INITIAL_STATE);

  useEffect(() => {
    AsyncStorage.getItem('tasks').then(tasksStored => {
      dispatch(TasksActions.SET_TASKS(JSON.parse(tasksStored || '[]')));
    });
  }, []);

  return {
    tasks,
    dispatch,
    TasksContext,
    TasksDispatchContext,
  };
};

export default UseStore;
