export type Task = {
  title: string;
  description: string;
  categories: string;
  status: 'pending' | 'to do' | 'correction' | 'completed';
};

export const testData: Task[] = [
  {
    title: 'DF-01',
    description: "This is the task 1",
    categories: 'features',
    status: 'completed',
  },
  {
    title: 'DF-02',
    description: "This is the fix 2",
    categories: 'fixes',
    status: 'correction',
  },
  {
    title: 'DF-03',
    description: "This is the task 3",
    categories: 'features',
    status: 'to do',
  },
  {
    title: "DF-94",
    description: "This is the task 4",
    categories: "features",
    status: "pending"
  },
  {
    title: "DF-05",
    description: "This is the fix 1",
    categories: "fixes",
    status: "pending"
  }
];
