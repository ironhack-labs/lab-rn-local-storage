import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native'
import { colors } from '../theme/colors';
import { StackScreenProps } from '@react-navigation/stack';
import { TaskStackParamList } from '../types/TaskStackParamList';
import { globaStyles } from '../theme/global.style';
import CustomButton from '../components/CustomButton';
import { useTaskContext } from '../context/taskcontext/taskContext';
import { taskDetailStyle } from '../theme/taskdetail.style';
import { SearchStackParamList } from '../types/SearchStackParamList';

type Props = StackScreenProps<TaskStackParamList, 'TaskDetailScreen'>
type SearchProps = StackScreenProps<SearchStackParamList, 'SearchDetailScreen'>

const TaskDetailScreen = ({ route, navigation }: Props | SearchProps) => {

    const { task } = route.params
    const { deleteTask, completeTask } = useTaskContext()

    const showDeleteAlert = () => {
        Alert.alert('Delete Task', `Delete the task "${task.title}" ?`, [{ text: 'Cancel' }, {
            text: 'Delete', onPress: () => {
                deleteTask(task)
                navigation.goBack()
            }
        }])
    }

    const showCompleteAlert = () => {
        Alert.alert('Complete Task', `Mark as complete the task "${task.title}" ?`, [{ text: 'Cancel' }, {
            text: 'Complete', onPress: () => completeTask(task)
        }])
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, padding: 10 }}>
            <View style={taskDetailStyle.titleContainer}>
                <View style={{ alignItems: "flex-start" }}>
                    <Text style={globaStyles.title}>{task.title}</Text>
                    <Text style={{ color: colors.secundary, marginBottom: 10 }}>{task.category.title} </Text>
                    {task.completed && <Text style={{ color: colors.secundary, fontWeight: 'bold' }}>{'Completed'}</Text>}
                </View>
                <Text style={globaStyles.subTitle}>{task.date}</Text>
            </View>
            <View style={taskDetailStyle.descriptionCard}>
                <ScrollView >
                    <Text>{task.description}</Text>
                </ScrollView>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                <CustomButton
                    title='Delete task'
                    background={colors.red}
                    textColor={colors.primaryDark}
                    onPress={() => showDeleteAlert()} />
                {!task.completed && <CustomButton
                    onPress={() => showCompleteAlert()}
                    title='Complete task' />}
            </View>
        </View>
    );
}

export default TaskDetailScreen;
