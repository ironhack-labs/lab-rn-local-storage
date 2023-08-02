import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ITask } from '../types/types'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../context/Context'

export const TaskCard = (item: ITask) => {
    const { deleteTask } = useContext(AppContext);
    const navigation = useNavigation();
    const { category, title, isActive } = item;
    const status = isActive ? 'none' : 'line-through';
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', { item })} onLongPress={() => deleteTask(item.id)}>
            <Text style={styles.title}>{category}</Text>
            <Text style={[styles.text, { textDecorationLine: status }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        backgroundColor: 'silver',
        padding: 16,
        borderRadius: 16
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text: {
        fontStyle: 'italic'
    }
})