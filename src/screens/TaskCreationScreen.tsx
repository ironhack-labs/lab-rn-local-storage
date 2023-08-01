// src/screens/TaskCreationScreen.tsx
import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {Task} from '../types/taskTypes';
import {globalStyles} from '../styles';

const TaskCreationScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const {dispatch} = useContext(TaskContext);

  const handleTaskCreation = () => {
    // Genera un ID único para la nueva tarea
    const newTaskId = Date.now();

    // Crea un objeto de nueva tarea
    const newTask: Task = {
      id: newTaskId,
      title,
      description,
      category,
      completed: false,
    };

    // Envía la acción para agregar la nueva tarea al estado global
    dispatch({type: 'ADD_TASK', payload: newTask});
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Task Creation Screen</Text>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Create Task" onPress={handleTaskCreation} />
    </View>
  );
};

export default TaskCreationScreen;
