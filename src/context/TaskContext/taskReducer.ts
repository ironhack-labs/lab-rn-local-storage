import {TasksReducerAction, TasksReducerState} from '../../types';

const initialTasksReducerValue: TasksReducerState = {
  tasks: [{id: 1, category: 'Home', description: 'Clean home', title: 'Home'}],
};

const tasksReducer = (
  state: TasksReducerState,
  action: TasksReducerAction,
): TasksReducerState => {
  switch (action.type) {
    case 'addTask':
      return {...state, tasks: [...state.tasks, action.payload.task]};
    default:
      return state;
  }
};

export {tasksReducer, initialTasksReducerValue};
