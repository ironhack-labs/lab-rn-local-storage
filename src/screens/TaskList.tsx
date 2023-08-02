import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TaskCard } from '../components/TaskCard'
import { AppContext } from '../context/Context'
import { ActionButton } from '../components/ActionButton'
import { ParamListBase, useNavigation } from '@react-navigation/native'



export const TaskList = () => {
    const navigation = useNavigation<ParamListBase>();
    const { tasks } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text>Your task list contains {tasks?.length} items</Text>
            {
                tasks?.map(item => <TaskCard {...item} key={item.description} />)
            }
            <ActionButton label='Go to Task Form' onPress={() => navigation.navigate('Form')} />
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