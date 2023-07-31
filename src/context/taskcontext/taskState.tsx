import React, { useReducer } from 'react';
import { TaskContext, initialState } from './taskContext';
import TaskReducer from './taskReducer';
import { Task } from '../../types/Task';
import { ADD_CATEGORY, ADD_TASK, CATEGORY, DELETE_TASK, FILTER_CATEGORY, LOAD_CATEGORY, LOAD_TASK, SET_SEARCH_LIST, TASK, TOGGLE_MODAL_CAT } from '..';
import { Category } from '../../types/Category';
import AsyncStorage from '@react-native-async-storage/async-storage';


const TaskContextProvider = ({ children }: { children: JSX.Element }) => {

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const addTask = async (task: Task) => {
        try {
            const newTaskArray = [...state.tasks, task]
            await AsyncStorage.setItem(TASK, JSON.stringify(newTaskArray))

            dispatch({
                type: ADD_TASK,
                payload: task
            })
        } catch (e) {
            console.log(e)
        }
    }

    const loadTasks = async () => {
        try {
            const result = await AsyncStorage.getItem(TASK)
            const tasks = result != null ? JSON.parse(result) : []

            dispatch({
                type: LOAD_TASK,
                payload: tasks
            })
        } catch (error) {
            console.log(error)
        }
    }

    const searchTask = (taskName: string) => {
        const tasks = taskName === '' ? [] : state.tasks.filter((obj) => obj.title.toLowerCase().includes(taskName.toLocaleLowerCase()))

        dispatch({
            type: SET_SEARCH_LIST,
            payload: tasks
        })
    }

    const completeTask = async (task: Task) => {
        try {
            const taskIndex = state.tasks.findIndex((obj) => obj.id === task.id)
            const tempTaskArray = state.tasks
            tempTaskArray[taskIndex].completed = true

            await AsyncStorage.setItem(TASK, JSON.stringify(tempTaskArray))
            dispatch({
                type: LOAD_TASK,
                payload: tempTaskArray
            })
        } catch (error) {

        }
    }


    const deleteTask = async (task: Task) => {
        try {

            const tempTasks = state.tasks.filter(value => value.id !== task.id)
            await AsyncStorage.setItem(TASK, JSON.stringify(tempTasks))

            dispatch({
                type: DELETE_TASK,
                payload: tempTasks
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addCategory = async (category: Category) => {
        try {
            const newCatArray = [...state.categories, category]
            await AsyncStorage.setItem(CATEGORY, JSON.stringify(newCatArray))
            dispatch({
                type: ADD_CATEGORY,
                payload: category
            })
        } catch (e) {
            console.log(e)
        }
    }

    const loadCategories = async () => {
        try {
            const result = await AsyncStorage.getItem(CATEGORY)
            const categories = result != null ? JSON.parse(result) : []

            dispatch({
                type: LOAD_CATEGORY,
                payload: categories
            })
        } catch (error) {
            console.log(error)
            return null
        }
    }

    const setModalCatVisible = (value: boolean) => {
        dispatch({
            type: TOGGLE_MODAL_CAT,
            payload: value
        })
    }

    const filterByCat = (category: Category) => {
        let filterTasks;

        if (category.id == '-1') filterTasks = state.tasks
        else filterTasks = state.tasks.filter(value => value.category.id === category.id)

        dispatch({
            type: FILTER_CATEGORY,
            payload: filterTasks
        })

    }


    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            filteredTaskList: state.filteredTaskList,
            searchTaskList: state.searchTaskList,
            categories: state.categories,
            modalCatVisible: state.modalCatVisible,
            addTask,
            addCategory,
            setModalCatVisible,
            deleteTask,
            loadCategories,
            loadTasks,
            completeTask,
            filterByCat,
            searchTask
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;