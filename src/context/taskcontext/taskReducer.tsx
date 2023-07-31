import { Category } from "../../types/Category"
import { Task } from "../../types/Task"
import { TaskContextState } from "../../types/TaskContextState"
import { ADD_TASK, ADD_CATEGORY, TOGGLE_MODAL_CAT, DELETE_TASK, LOAD_CATEGORY, LOAD_TASK, FILTER_CATEGORY, SET_SEARCH_LIST } from '../index'

interface Action {
    payload: Task | Task[] | Category | boolean,
    type: string
}

export default (state: TaskContextState, action: Action): TaskContextState => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload as Task], filteredTaskList: [...state.tasks, action.payload as Task] }
        case ADD_CATEGORY:
            return { ...state, categories: [...state.categories, action.payload as Category] }
        case TOGGLE_MODAL_CAT:
            return { ...state, modalCatVisible: action.payload as boolean }
        case LOAD_TASK:
        case DELETE_TASK:
            return { ...state, tasks: action.payload as Task[], filteredTaskList: action.payload as Task[] }
        case FILTER_CATEGORY:
            return { ...state, filteredTaskList: action.payload as Task[] }
        case LOAD_CATEGORY:
            return { ...state, categories: action.payload as Category[] }
        case SET_SEARCH_LIST:
            return { ...state, searchTaskList: action.payload as Task[] }
        default:
            return state
    }
}