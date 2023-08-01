import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/TaskDetails.style";
import { useTaskProvider } from "../context/useTask";
import { useNavigation } from "@react-navigation/native";

const TaskDetails = ({ route }: { route: any }) => {

    const { item } = route.params
    const {changeTaskStatus, deleteTask} = useTaskProvider()
    const [taskStatus, setTaskStatus] = useState(item.status)
    const navigation = useNavigation()

    const finishTask = () => {
        changeTaskStatus(item.id);
        setTaskStatus('Done')
    }

    const handleDeleteTask = () => {
        deleteTask(item.id)
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task Name</Text>
            <Text style={styles.subText}>
                {item.task}
            </Text>
            <Text style={styles.title}>Task Name</Text>
            <Text style={styles.subText}>
                {item.category}
            </Text>
            <Text style={styles.title}>Task Name</Text>
            <Text style={styles.subText}>
                {taskStatus}
            </Text>
            <Text style={styles.title}>Task Name</Text>
            <Text style={styles.subText}>
                {item.description}
            </Text>
            <Text style={styles.title}>Task Name</Text>
            <Text style={styles.subText}>
                {item.id}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touchables} onPress={() => finishTask()} disabled={taskStatus=='Done'}>
                    <Text>Complete task</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchables} onPress={() => handleDeleteTask()}>
                    <Text>Delete task</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

export default TaskDetails;