import { createContext, useContext, useReducer, useState } from "react";
import { Action, TaskInterface, TaskReducerState, TaskState, taskCategory, taskStatus } from "../types/TaskContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    taskArray: [],
    addTask: () => { },
    changeTaskStatus: () => { },
    getDataFromLocalStorage: () => { },
    deleteTask: () => { },
    filterTask: () => { },
    clearFilter: () => { },
}

const TaskContext = createContext<TaskState>(initialState);

const TaskReducer = (state: TaskReducerState, action: Action): TaskReducerState => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, taskArray: action.payload };
        case 'UPDATE_STATUS':
            return { ...state, taskArray: action.payload };
        case 'FILTER_TASK':
            return { ...state, taskArray: action.payload };
    }
}

export const TaskProvider = ({ ...props }) => {
    const [{ taskArray }, dispatch] = useReducer(TaskReducer, initialState);

    const [auxiliar, setAuxiliar] = useState(taskArray)

    const addTask = (newTask: TaskInterface) => {
        if (auxiliar.length != 0) {
            const newTaskArray = [...auxiliar, newTask];
            saveToLocalStorage(newTaskArray)
            dispatch({ type: 'ADD_TASK', payload: newTaskArray });
        } else {
            saveToLocalStorage([newTask])
            setAuxiliar([newTask])
            dispatch({ type: 'ADD_TASK', payload: [newTask] });
        }

    }

    const changeTaskStatus = (id: number) => {
        const updatedStatus = taskArray.map(t => {
            if (t.id == id) {
                return { ...t, status: taskStatus.Done }
            }
            return t;
        })
        return Promise.all(updatedStatus).then(() => {
            saveToLocalStorage(updatedStatus)
            setAuxiliar(updatedStatus);
            dispatch({ type: 'UPDATE_STATUS', payload: updatedStatus });
        })
    }

    const deleteTask = (id: number) => {
        const objWithIdIndex = taskArray.findIndex((obj) => obj.id === id);

        if (objWithIdIndex > -1) {
            taskArray.splice(objWithIdIndex, 1);
        }
        saveToLocalStorage(taskArray)
        setAuxiliar(taskArray);
        dispatch({ type: 'ADD_TASK', payload: taskArray })
    }

    const saveToLocalStorage = async (newTaskArray: TaskInterface[]) => {
        try {
            await AsyncStorage.setItem('data', JSON.stringify(newTaskArray));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    const getDataFromLocalStorage = async () => {
        try {
            const data = await AsyncStorage.getItem('data');
            const array = data !== null ? JSON.parse(data) : [];
            setAuxiliar(array)
            dispatch({ type: 'ADD_TASK', payload: array })
        } catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    };

    const clearFilter = () => {
        dispatch({ type: 'ADD_TASK', payload: auxiliar })
    }

    const filterTask = async (category: taskCategory) => {
        const data = await AsyncStorage.getItem('data');
        const array = data !== null ? JSON.parse(data) : [];
        const newTaskArray = array.filter((t: TaskInterface) => t.category == category)
        return Promise.all(newTaskArray).then(() => {
            dispatch({ type: 'FILTER_TASK', payload: newTaskArray })
        })
    }

    const value = { taskArray, addTask, changeTaskStatus, getDataFromLocalStorage, deleteTask, filterTask, clearFilter }
    return (<TaskContext.Provider {...props} value={value} />)
}

export const useTaskProvider = () => {
    const contextProvider = useContext(TaskContext);
    if (!contextProvider) {
        throw new Error('error in provider')
    }
    return contextProvider;
}