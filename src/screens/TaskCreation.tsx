import React from "react"
import { Controller, ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn, useForm } from "react-hook-form"
import { SafeAreaView, Text, TextInput, View, Modal, Touchable, TouchableOpacity } from "react-native"
import { TaskInterface, taskCategory, taskStatus } from "../types/TaskContext"
import { style } from "../theme/TaskCreation.style"
import { Picker } from "@react-native-picker/picker"
import { taskCreation } from "../types/TaskCreation"
import { useTaskProvider } from "../context/useTask"
import { useNavigation } from "@react-navigation/native"

const TaskCreation = () => {

    const { addTask } = useTaskProvider()

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<TaskInterface>()

    const navigation = useNavigation()

    const onSubmit = (data: taskCreation) => {
        const newTask: TaskInterface = {
            id: new Date().getTime(),
            task: data.task,
            category: data.category,
            description: data.description,
            status: taskStatus.InProgress
        }
        addTask(newTask);
    }

    return (
        <SafeAreaView>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={style.container}>
                        <TextInput
                            placeholder='Task title'
                            style={style.inputContainer}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </View>
                )}
                name="task"
                rules={{ required: "Task name is required" }}
                defaultValue=""
            />
            {errors.task && <Text style={style.error}>{errors.task.message}</Text>}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={style.container}>
                        <TextInput
                            placeholder='Task description'
                            style={style.inputContainer}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </View>
                )}
                name="description"
                rules={{ required: "Task description is required" }}
                defaultValue=""
            />
            {errors.description && <Text style={style.error}>{errors.description.message}</Text>}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View >
                        <Picker
                            selectedValue={value}
                            onValueChange={(itemValue, itemIndex) =>
                                onChange(itemValue)
                            }>
                            <Picker.Item label="Bug" value={taskCategory.Bug} />
                            <Picker.Item label="Feature" value={taskCategory.Feature} />
                            <Picker.Item label="Fix" value={taskCategory.Fix} />
                        </Picker>
                        <View style={style.textPickerContainer}>
                            <Text style={style.textPicker}>Category selected : {value}</Text>
                        </View>
                    </View>
                )}
                name="category"
                rules={{ required: "Task category is required" }}
                defaultValue={taskCategory.Feature}
            />
            {errors.category && <Text style={style.error}>{errors.category.message}</Text>}

            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={style.addTask}><Text>Add new task</Text></TouchableOpacity>
        </SafeAreaView >)
}

export default TaskCreation;