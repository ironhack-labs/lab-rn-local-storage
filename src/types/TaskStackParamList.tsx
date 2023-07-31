import { Task } from "./Task"

export type TaskStackParamList = {
    TaskListScreen: undefined,
    TaskCreationScreen: undefined,
    TaskDetailScreen: { task: Task }
}