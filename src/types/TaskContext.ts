export interface TaskState {
    taskArray: TaskInterface[];
    addTask: (newTask: TaskInterface) => void;
    changeTaskStatus: (id: number) => void;
    getDataFromLocalStorage: () => void;
    deleteTask: (id: number) => void;
    filterTask: (category: taskCategory) => void;
    clearFilter: () => void;
}

export interface TaskInterface {
    id: number;
    task: string;
    category: taskCategory;
    description: string;
    status: taskStatus;
}

export type TaskReducerState = {
    taskArray: TaskInterface[];
}

export type Action = | {
    type: 'ADD_TASK',
    payload: TaskInterface[]
} | {
    type: 'UPDATE_STATUS',
    payload: TaskInterface[]
} | {
    type: 'FILTER_TASK',
    payload: TaskInterface[]
}

export enum taskStatus {
    InProgress = 'In progress',
    Done = 'Done',
}

export enum taskCategory {
    Feature = 'Feature',
    Bug = 'Bug',
    Fix = 'Fix'
}