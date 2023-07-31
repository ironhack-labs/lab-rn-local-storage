import React, { createContext, useContext } from 'react'
import { TaskContextState } from '../../types/TaskContextState'

export const initialState: TaskContextState = {
    tasks: [],
    filteredTaskList: [],
    searchTaskList: [],
    categories: [],
    modalCatVisible: false,
    setModalCatVisible: () => { },
    addTask: () => { },
    addCategory: () => { },
    deleteTask: () => { },
    loadCategories: () => { },
    loadTasks: () => { },
    completeTask: () => { },
    filterByCat: () => { },
    searchTask: () => { }
}

export const TaskContext = createContext(initialState)

export const useTaskContext = () => {
    const context = useContext(TaskContext)

    if (!context)
        throw new Error('Cant access from this context')

    return context
}