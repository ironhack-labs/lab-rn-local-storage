import { Category } from "./Category";

export interface Task {
    id: string,
    title: string,
    description: string,
    date: string,
    category: Category,
    completed: boolean
}