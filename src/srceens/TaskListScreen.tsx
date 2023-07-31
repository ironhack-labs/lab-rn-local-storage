import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import TaskListItem from '../components/TaskListItem';
import { colors } from '../theme/colors';
import { useTaskContext } from '../context/taskcontext/taskContext';
import FloatingButton from '../components/FloatingButton';
import { StackScreenProps } from '@react-navigation/stack'
import { TaskStackParamList } from '../types/TaskStackParamList';
import CategoryFilter from '../components/CategoryFilter';
import AddCategoryModal from '../components/AddCategoryModal';

type Props = StackScreenProps<TaskStackParamList, 'TaskListScreen'>

const TaskListScreen = ({ navigation }: Props) => {

    const context = useTaskContext()

    useEffect(() => {
        context.loadCategories()
        context.loadTasks()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <CategoryFilter />
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ padding: 5, paddingBottom: 100 }}
                renderItem={({ item }) => <TaskListItem item={item} onPress={() => navigation.navigate('TaskDetailScreen', { task: item })} />}
                data={context.filteredTaskList}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text style={{ alignSelf: "center", color: colors.white, fontWeight: 'bold' }}>Empty list</Text>}
            />
            <FloatingButton onPress={() => navigation.navigate("TaskCreationScreen")} />

            <AddCategoryModal />
        </View>
    );
}

export default TaskListScreen;