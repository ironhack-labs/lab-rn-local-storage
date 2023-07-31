import {Task} from '../types';

export const TASKS_DATA: Task[] = [
  {
    id: 'cbce35e8-2fbe-11ee-be56-0242ac120002',
    title: 'Laundry',
    description: 'Do the laundry on the morning',
    category: 'HOME',
    status: 'pending',
  },
  {
    id: 'cd07eb9a-2fbe-11ee-be56-0242ac120002',
    title: 'Grocery Shopping',
    description: 'Buy groceries for the week',
    category: 'HOME',
    status: 'pending',
  },
  {
    id: 'cd07edd2-2fbe-11ee-be56-0242ac120002',
    title: 'Meeting with Client',
    description: 'Discuss project requirements with the client',
    category: 'WORK',
    status: 'completed',
  },
  {
    id: 'cd07f0c4-2fbe-11ee-be56-0242ac120002',
    title: 'Exercise',
    description: 'Go for a run in the evening',
    category: 'LEARNING',
    status: 'pending',
  },
  {
    id: 'cd07f304-2fbe-11ee-be56-0242ac120002',
    title: 'Read a Book',
    description: 'Read the new book you bought',
    category: 'LEARNING',
    status: 'pending',
  },
  {
    id: 'cd07f4d8-2fbe-11ee-be56-0242ac120002',
    title: 'Clean the House',
    description: 'Tidy up the house and clean the rooms',
    category: 'HOME',
    status: 'completed',
  },
  {
    id: 'cd07f66c-2fbe-11ee-be56-0242ac120002',
    title: 'Prepare Presentation',
    description: 'Create a presentation for the team meeting',
    category: 'WORK',
    status: 'pending',
  },
  {
    id: 'cd07f83e-2fbe-11ee-be56-0242ac120002',
    title: 'Study',
    description: 'Study for the upcoming exam',
    category: 'LEARNING',
    status: 'pending',
  },
  {
    id: 'cd07fa1a-2fbe-11ee-be56-0242ac120002',
    title: 'Pay Bills',
    description: 'Pay utility bills before the due date',
    category: 'HOME',
    status: 'completed',
  },
  {
    id: 'cd07fbf0-2fbe-11ee-be56-0242ac120002',
    title: 'Finish Project',
    description: 'Complete the project tasks and submit it',
    category: 'WORK',
    status: 'pending',
  },
];

export const ALL_TASK_CATEGORIES: Task['category'][] = [
  'HOME',
  'WORK',
  'LEARNING',
];
