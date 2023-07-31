import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button } from 'react-native';
import { useTasksContext } from '../context/TasksContext';
import { Task } from '../types/Task';

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

    // Limpia los campos después de agregar la tarea
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <SafeAreaView>
      <Text>Título:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Escribe el título de la tarea"
      />

      <Text>Descripción:</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Escribe la descripción de la tarea"
      />

      <Text>Categoría:</Text>
      <TextInput
        value={category}
        onChangeText={setCategory}
        placeholder="Escribe la categoría de la tarea"
      />

      <Button title="Crear Tarea" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default CreateTaskScreen;
