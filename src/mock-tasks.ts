import { TaskList, Category } from './types';

export const TASKS: TaskList = [
  {
    id: '1690823282402',
    title: 'Lorems Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'WORK',
    completed: false,
  },
  {
    id: '1690823448635',
    title: 'Sed ut perspiciatis unde',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'HOME',
    completed: false,
  },
  {
    id: '1690823475734',
    title: 'Lorems Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'HOME',
    completed: false,
  },
  {
    id: '1690823456330',
    title: 'Ut enim ad minima veniam',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'LEARNING',
    completed: false,
  },
];

export const CATEGORIES: Category[] = ['ALL', 'HOME', 'WORK', 'LEARNING'];
