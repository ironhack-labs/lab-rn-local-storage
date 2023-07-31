export type Task = {
  id: string;
  title: string;
  description: string;
  category: 'HOME' | 'WORK' | 'LEARNING';
  status: 'pending' | 'completed';
};
