import { taskCategory, taskStatus } from "./TaskContext";

export interface taskCreation {
    task: string,
    description: string,
    category: taskCategory
}