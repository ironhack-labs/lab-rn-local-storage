import {Task} from '../types';

export const TASKS_DATA: Task[] = [
  {
    id: 'cbce35e8-2fbe-11ee-be56-0242ac120002',
    title: 'laundry',
    description: 'do the laundry on the morning',
    category: 'HOME',
    status: 'pending',
  },
];

export const ALL_TASK_CATEGORIES: Task['category'][] = [
  'HOME',
  'WORK',
  'LEARNING',
];
