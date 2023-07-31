import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTasksContext } from '../context/TasksContext';
import { Task } from '../types/Task';

const CreateTaskScreen = () => {
  const { state, dispatch } = useTasksContext();
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
    <SafeAreaView style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Título:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Escribe el título de la tarea"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Escribe la descripción de la tarea"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Categoría:</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Escribe la categoría de la tarea"
        />
      </View>

      <Text style={styles.availableCategoriesLabel}>Categorías disponibles:</Text>
      <View style={styles.categoriesContainer}>
        {state.categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryButton, cat === category && styles.selectedCategoryButton]}
            onPress={() => setCategory(cat)}
          >
            <Text style={[styles.categoryButtonText, cat === category && styles.selectedCategoryButtonText]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.createTaskButton} onPress={handleSubmit}>
        <Text style={styles.createTaskButtonText}>Crear Tarea</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  availableCategoriesLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryButton: {
    marginRight: 8,
    marginBottom: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
  },
  selectedCategoryButton: {
    backgroundColor: '#3a86ff',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  selectedCategoryButtonText: {
    color: 'white',
  },
  createTaskButton: {
    backgroundColor: '#3a86ff',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  createTaskButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateTaskScreen;
