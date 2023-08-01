import AsyncStorage from '@react-native-async-storage/async-storage';
import {TasksActionsEnum} from './Actions';
import {ITasksActions, ITasksContext} from './Interface';

const StorageKey = 'tasks';

const TasksReducer = (
  state: ITasksContext,
  action: ITasksActions,
): ITasksContext => {
  let _tasks = [...state.tasks];
  switch (action.type) {
    case TasksActionsEnum.SET_TASKS:
      return {...state, tasks: action.payload};
    case TasksActionsEnum.ADD_TASK:
      _tasks.push(action.payload);
      AsyncStorage.setItem(StorageKey, JSON.stringify(_tasks));
      return {...state, tasks: _tasks};
    case TasksActionsEnum.REMOVE_TASK:
      _tasks = _tasks.filter(item => item.id !== action.payload.id);
      AsyncStorage.setItem(StorageKey, JSON.stringify(_tasks));
      return {...state, tasks: _tasks};
    case TasksActionsEnum.UPDATE_TASK:
      let taskIndex = _tasks.findIndex(item => item.id === action.payload.id);
      if (taskIndex < 0) return {...state};
      _tasks[taskIndex] = {
        ..._tasks[taskIndex],
        status: action.payload.status,
      };
      AsyncStorage.setItem(StorageKey, JSON.stringify(_tasks));
      return {...state, tasks: _tasks};
    case TasksActionsEnum.SET_SELECTED_TASK:
      return {...state};
    case TasksActionsEnum.SET_SELECTED_CATEGORY:
      return {...state, selectedCategory: action.payload};
    default:
      return state;
  }
};

export default TasksReducer;
