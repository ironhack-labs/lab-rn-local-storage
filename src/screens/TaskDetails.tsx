import React from 'react'
import { ITask, } from '../types/types'
import { StyleSheet, Text, View } from 'react-native'
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native'

export const TaskDetails = () => {
    const route: RouteProp<ParamListBase> = useRoute()
    const { id, category, title, description, isActive } = route?.params?.item;
    return (
        <View style={styles.container}>
            <Text>These are the details of your task:</Text>
            <Text>ID: #000000{id}</Text>
            <Text>Category: {category}</Text>
            <Text>Title: {title}</Text>
            <Text>Description: {description}</Text>
            <Text>Status: {JSON.stringify(isActive)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})