import { Category } from "./Category";
import { Task } from "./Task";

export interface TaskContextState {
    tasks: Task[],
    filteredTaskList: Task[],
    searchTaskList: Task[],
    categories: Category[],
    modalCatVisible: boolean,
    setModalCatVisible: (visible: boolean) => void,
    addTask: (task: Task) => void,
    addCategory: (category: Category) => void,
    deleteTask: (task: Task) => void,
    loadCategories: () => void
    loadTasks: () => void,
    completeTask: (task: Task) => void,
    filterByCat: (category: Category) => void,
    searchTask: (taskName: string) => void
}