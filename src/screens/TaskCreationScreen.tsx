import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {Task} from '../types/Task';

const TaskCreationScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const {dispatch} = useContext(TaskContext);

  const handleCreateTask = () => {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      description,
      category,
      completed: false,
    };

    dispatch({type: 'ADD_TASK', payload: newTask});
    // Clear input fields after adding the task
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <View>
      <Text>Title</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Description</Text>
      <TextInput value={description} onChangeText={setDescription} />
      <Text>Category</Text>
      <TextInput value={category} onChangeText={setCategory} />
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
};

export default TaskCreationScreen;
