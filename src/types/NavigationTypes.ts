import { TaskInterface } from "./TaskContext"

export type RootStackParamsList = {
    TaskDetails: { item: TaskInterface } | undefined;
    TaskList: {};
}