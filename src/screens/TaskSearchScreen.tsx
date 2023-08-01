import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../../types';

const TaskSearchScreen = () => {
  const { tasks } = useTaskContext();
  const [searchText, setSearchText] = useState('');

  const filteredTasks = tasks.filter((task) => {
    const titleMatch = task.title.toLowerCase().includes(searchText.toLowerCase());
    const categoryMatch = task.category.toLowerCase().includes(searchText.toLowerCase());
    return titleMatch || categoryMatch;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Tasks</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by title or category"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredTasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskCategory}>{item.category}</Text>
          </View>
        )}
        keyExtractor={(item: Task) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  taskContainer: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskCategory: {
    fontSize: 16,
    color: '#666',
  },
});

export default TaskSearchScreen;
