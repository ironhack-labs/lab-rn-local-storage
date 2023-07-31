import {TasksReducerAction, TasksReducerState} from '../../types';

const initialTasksReducerValue: TasksReducerState = {
  tasks: [],
};

const tasksReducer = (
  state: TasksReducerState,
  action: TasksReducerAction,
): TasksReducerState => {
  switch (action.type) {
    case 'setTasks':
      return {...state, tasks: [...action.payload.tasks]};
    case 'addTask':
      return {...state, tasks: [...state.tasks, action.payload.task]};
    case 'removeTask': {
      const {taskId} = action.payload;
      return {...state, tasks: state.tasks.filter(x => x.id !== taskId)};
    }
    case 'updateTaskStatus': {
      const {taskId} = action.payload;
      const taskIndex = state.tasks.findIndex(x => x.id === taskId);

      if (taskIndex > -1) {
        state.tasks[taskIndex].isCompleted =
          !state.tasks[taskIndex].isCompleted;
      }

      return {...state, tasks: [...state.tasks]};
    }
    default:
      return state;
  }
};

export {tasksReducer, initialTasksReducerValue};
