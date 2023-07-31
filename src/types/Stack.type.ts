import {TASK_LIST, TASK_DETAILS, TASK_CREATION} from '../constants/screens';

import type {Task} from './Task.type';

export type NativeStackParamList = {
  [TASK_LIST]: undefined;
  [TASK_DETAILS]: {task: Task};
  [TASK_CREATION]: undefined;
};
