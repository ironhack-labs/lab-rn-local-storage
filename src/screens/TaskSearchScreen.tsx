// src/screens/TaskSearchScreen.tsx
import React, {useContext, useState} from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {Task} from '../types/taskTypes';

const TaskSearchScreen = () => {
  const {state} = useContext(TaskContext);
  const {tasks} = state;

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<Task[]>([]);

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    filterTasks(text);
  };

  const filterTasks = (text: string) => {
    const searchTextLowerCase = text.toLowerCase();
    const filtered = tasks.filter(
      task =>
        task.title.toLowerCase().includes(searchTextLowerCase) ||
        task.description.toLowerCase().includes(searchTextLowerCase),
    );

    setSearchResults(filtered);
  };

  const renderItem = ({item}: {item: Task}) => (
    <TouchableOpacity>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>Task Search Screen</Text>
      <TextInput
        placeholder="Search tasks by title or description"
        value={searchText}
        onChangeText={handleSearchChange}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TaskSearchScreen;
