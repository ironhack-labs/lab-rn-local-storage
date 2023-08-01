import {ITaskItem} from './Interface';

export enum TasksActionsEnum {
  SET_TASKS = 'SET_TASK',
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  SET_SELECTED_TASK = 'SET_SELECTED_TASK',
  SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY',
  UPDATE_TASK = 'UPDATE_TASK',
}

const TasksActions = {
  SET_TASKS: (tasks: ITaskItem[]) => ({
    type: TasksActionsEnum.SET_TASKS,
    payload: tasks,
  }),
  ADD_TASK: (tasks: ITaskItem) => ({
    type: TasksActionsEnum.ADD_TASK,
    payload: tasks,
  }),
  REMOVE_TASK: (tasks: ITaskItem) => ({
    type: TasksActionsEnum.REMOVE_TASK,
    payload: tasks,
  }),
  UPDATE_TASK: (tasks: ITaskItem) => ({
    type: TasksActionsEnum.UPDATE_TASK,
    payload: tasks,
  }),
  SET_SELECTED_TASK: (tasks: ITaskItem) => ({
    type: TasksActionsEnum.SET_SELECTED_TASK,
    payload: tasks,
  }),
  SET_SELECTED_CATEGORY: (category: string) => ({
    type: TasksActionsEnum.SET_SELECTED_CATEGORY,
    payload: category,
  }),
};

export default TasksActions;
