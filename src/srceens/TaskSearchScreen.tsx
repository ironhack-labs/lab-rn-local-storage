import React, { useEffect } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import TaskListItem from '../components/TaskListItem';
import { colors } from '../theme/colors';
import { useTaskContext } from '../context/taskcontext/taskContext';
import FloatingButton from '../components/FloatingButton';
import { StackScreenProps } from '@react-navigation/stack'
import { TaskStackParamList } from '../types/TaskStackParamList';
import CategoryFilter from '../components/CategoryFilter';
import AddCategoryModal from '../components/AddCategoryModal';
import { SearchStackParamList } from '../types/SearchStackParamList';
import { globaStyles } from '../theme/global.style';

type Props = StackScreenProps<SearchStackParamList, 'SearchScreen'>

const TaskSearchScreen = ({ navigation }: Props) => {

    const context = useTaskContext()

    useEffect(() => {
        context.loadCategories()
        context.loadTasks()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={[globaStyles.textInput, { marginVertical: 10, width: '95%', alignSelf: 'center' }]} >
                <TextInput
                    onChangeText={(text) => context.searchTask(text)}
                    style={{ color: colors.primaryDark }}
                    placeholder='Search...'
                />
            </View>
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ padding: 5, paddingBottom: 100 }}
                renderItem={({ item }) => <TaskListItem item={item} onPress={() => navigation.navigate('SearchDetailScreen', { task: item })} />}
                data={context.searchTaskList}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text style={{ alignSelf: "center", color: colors.white, fontWeight: 'bold' }}>Empty list</Text>}
            />

            <AddCategoryModal />
        </View>
    );
}

export default TaskSearchScreen;