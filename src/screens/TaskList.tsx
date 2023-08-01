import React, { useEffect } from "react"
import { FlatList, Text, Touchable, TouchableOpacity, View } from "react-native"

import { style } from "../theme/TaskList.style";
import { useNavigation } from "@react-navigation/native";
import { TaskInterface } from "../types/TaskContext";
import { useTaskProvider } from "../context/useTask";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../types/NavigationTypes";
import ModalCategory from "../components/ModalCategory";

const TaskList = () => {
    const { taskArray, getDataFromLocalStorage } = useTaskProvider();

    useEffect(() => {
        getDataFromLocalStorage()
    }, [])

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>()

    const Item = (item: TaskInterface) => (
        <View style={style.listContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskDetails', { item })}
                style={style.touchable}>
                <View style={style.dataContainer}>
                    <View>
                        <Text style={style.taskTitle}>Task: </Text>
                        <Text style={style.task}>{item.task}</Text>
                    </View>
                    <View>
                        <Text style={style.taskTitle}>Categroy:  </Text>
                        <Text style={style.task}>{item.category}</Text>
                    </View>
                    <View>
                        <Text style={style.taskTitle}>Status:  </Text>
                        <Text style={style.task}>{item.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View >
    );

    return (
        <View style={style.container}>
            {taskArray && (
                <FlatList
                    data={taskArray}
                    renderItem={({ item }) => Item(item)}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
            <ModalCategory />
        </View>
    )
}

export default TaskList;
