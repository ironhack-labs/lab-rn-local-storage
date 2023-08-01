import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {useTaskContext} from '../context/TaskContext';
import {Task} from '../../types';

const TaskCreationScreen = () => {
  const {addTask} = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSaveTask = () => {
    if (!title || !category) {
      Alert.alert('Alert', 'Title and Category are required.');
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      category,
      completed: false,
    };

    addTask(newTask);

    setTitle('');
    setDescription('');
    setCategory('');
    Alert.alert('Success', 'Task added successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Save Task" onPress={handleSaveTask} />
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
});

export default TaskCreationScreen;
