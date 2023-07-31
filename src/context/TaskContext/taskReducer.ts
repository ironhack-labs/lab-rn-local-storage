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
    case 'updateTask': {
      const taskUpdated = action.payload.task;
      const taskIndex = state.tasks.findIndex(x => x.id === taskUpdated.id);
      state.tasks[taskIndex] = {...taskUpdated};
      return {...state, tasks: [...state.tasks]};
    }
    default:
      return state;
  }
};

export {tasksReducer, initialTasksReducerValue};
