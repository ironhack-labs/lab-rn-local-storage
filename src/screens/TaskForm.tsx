import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ActionButton } from '../components/ActionButton';
import { AppContext } from '../context/Context';
import { ParamListBase, useNavigation } from '@react-navigation/native';

export const TaskForm: React.FC = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createTask } = useContext(AppContext);
    const navigation = useNavigation<ParamListBase>();

    return (
        <View style={styles.container}>
            <Text>Please add a new task:</Text>
            <TextInput style={styles.input} value={category} placeholder='Category' onChangeText={setCategory} />
            <TextInput style={styles.input} value={title} placeholder='Title' onChangeText={setTitle} />
            <TextInput style={styles.input} value={description} placeholder='Description' onChangeText={setDescription} />
            <ActionButton label='Create task' onPress={() => {
                createTask({
                    id: JSON.stringify(Math.floor(Math.random() * 100)),
                    category,
                    title,
                    description,
                    isActive: true
                })
                navigation.navigate('Home');
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        width: '50%',
        padding: 4,
        margin: 4
    }
})