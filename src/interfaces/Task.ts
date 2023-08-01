export type Task = {
  title: string;
  description: string;
  categories: string;
  status: 'pending' | 'to do' | 'correction' | 'completed';
};
