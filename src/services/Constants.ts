import {ITasksContext} from './Interface';

export const categories = ['Hogar', 'Trabajo', 'Aprendizaje'];
export const statuses = ['Pendiente', 'En curso', 'Hecho', 'Cancelado'];

export const INITIAL_STATE: ITasksContext = {
  tasks: [],
  selectedCategory: "",
  selectedTask: null,
};
