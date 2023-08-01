import React, { useState } from "react";
import { Modal, Text, Touchable, TouchableOpacity, View } from "react-native";
import { taskCategory } from "../types/TaskContext";
import { useTaskProvider } from "../context/useTask";
import { styles } from "../theme/ModalCategory";

const ModalCategory = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { filterTask, getDataFromLocalStorage } = useTaskProvider()
    const hanldeValue = (category: taskCategory) => {
        filterTask(category);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    style={styles.container}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    hanldeValue(taskCategory.Bug);
                                    setModalVisible(false);
                                }}><Text style={styles.Text}>{taskCategory.Bug}</Text></TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    hanldeValue(taskCategory.Feature);
                                    setModalVisible(false);
                                }}><Text style={styles.Text}> {taskCategory.Feature}</Text></TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    hanldeValue(taskCategory.Fix);
                                    setModalVisible(false);
                                }}><Text style={styles.Text}>{taskCategory.Fix}</Text></TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    getDataFromLocalStorage();
                                    setModalVisible(false);
                                }}><Text style={styles.Text}>Clear filters</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filter}><Text>Filter by category</Text></TouchableOpacity>
        </View >
    )
}
export default ModalCategory;