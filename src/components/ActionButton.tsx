import { NavigationProp, NavigatorScreenParams, ParamListBase, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type IActionButton = {
    label: string;
    onPress: () => void;
}

export const ActionButton = ({ label, onPress }: IActionButton) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 16,
        marginVertical: 16,
        padding: 8
    },
    label: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },

})