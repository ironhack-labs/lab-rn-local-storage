export type Task = {
  title: string;
  description: string;
  category: string;
  status: boolean;
};

export type Tasks = Task[];

export type BtnType = {
  title: string;
  onPress: Function;
};
