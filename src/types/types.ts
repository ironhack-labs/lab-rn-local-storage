export type Task = {
  title: string;
  description: string;
  category: string;
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
  | {type: 'REMOVE_TASK'; payload: Task};
