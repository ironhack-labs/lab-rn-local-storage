import React, {useContext, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TaskContext} from '../context/TaskContext';
import {Task} from '../types/taskTypes';
import {globalStyles} from '../styles';

const TaskListScreen = () => {
  const {state, dispatch} = useContext(TaskContext);
  const {tasks, categories, selectedCategory} = state;
  const [searchText, setSearchText] = useState('');
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  const navigation = useNavigation();

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    filterTasks(selectedCategory, text);
  };

  const filterTasks = (category: string | undefined, text: string) => {
    let filtered = tasks;

    if (category && category !== 'All') {
      filtered = tasks.filter(task => task.category === category);
    }

    const searchTextLowerCase = text.toLowerCase();
    filtered = filtered.filter(
      task =>
        task.title.toLowerCase().includes(searchTextLowerCase) ||
        task.description.toLowerCase().includes(searchTextLowerCase),
    );

    setFilteredTasks(filtered);
  };

  const handleTaskDetails = (taskId: number) => {
    navigation.navigate('TaskDetails', {taskId});
  };

  const renderItem = ({item}: {item: Task}) => (
    <TouchableOpacity onPress={() => handleTaskDetails(item.id)}>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Task List Screen</Text>
      <TextInput
        placeholder="Search tasks"
        value={searchText}
        onChangeText={handleSearchChange}
        style={globalStyles.textInput}
      />
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TaskListScreen;
