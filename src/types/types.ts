export type Category = 'uncategorized' | 'school' | 'work' | 'home';

export type Task = {
  title: string;
  description: string;
  category: Category;
  status: boolean;
  id: number;
};

export type Tasks = Task[];

export type BtnType = {
  title: string;
  onPress: Function;
};

export type Action =
  | {type: 'ADD_TASK'; payload: Task}
  | {type: 'EDIT_TASK'; payload: Task}
  | {type: 'ADD_TASKS'; payload: Tasks}
  | {type: 'REMOVE_TASK'; payload: Task}
  | {type: 'FILTER_TASKS'; payload: string};
