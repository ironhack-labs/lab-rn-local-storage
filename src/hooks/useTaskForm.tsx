import { useState } from 'react';
import { useTaskContext } from '../context/taskcontext/taskContext';
import { Category } from '../types/Category';
import { Alert } from 'react-native';

export function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

const useTaskForm = () => {

    const { addTask } = useTaskContext()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState<Category>()
    const [description, setDescription] = useState('')


    const changeTitle = (text: string) => {
        setTitle(text)
    }
    const changeCategory = (cat: Category) => {
        setCategory(cat)
    }
    const changeDescription = (text: string) => {
        setDescription(text)
    }

    const cleanData = () => {
        setDescription('')
        setTitle('')
        setCategory(undefined)
    }

    const setNewTask = () => {
        addTask({
            id: guidGenerator(),
            title: title,
            description: description,
            category: category!,
            date: new Date().toLocaleDateString(),
            completed: false
        })

        Alert.alert('','Task saved',[{text:'OK'}])

        cleanData()
    }
    return { title, category, description, changeTitle, changeCategory, changeDescription, setNewTask }
}

export default useTaskForm;