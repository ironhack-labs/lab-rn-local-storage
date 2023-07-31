import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTasksContext } from '../context/taksContext';
import { Task } from '../types/taks';
import { globalStyles } from '../styles/themes';

const CreateTaskScreen = () => {
  const { dispatch } = useTasksContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const newTask: Task = {
      id: Math.random(),
      title,
      description,
      category,
      completed: false,
    };

    dispatch({ type: 'ADD_TASK', payload: newTask });

    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <SafeAreaView>
      <Text style={globalStyles.title}>Agregar una tarea nueva</Text>

      <Text style={globalStyles.text}>Título:</Text>
      <TextInput
        style={globalStyles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Escribe el título de la tarea"
      />

      <Text style={globalStyles.text}>Descripción:</Text>
      <TextInput
        style={globalStyles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Escribe la descripción de la tarea"
      />

      <Text style={globalStyles.text}>Categoría:</Text>
      <TextInput
        style={globalStyles.input}
        value={category}
        onChangeText={setCategory}
        placeholder=""
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
        <Text style={globalStyles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateTaskScreen;
