import React, { useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTasksContext } from '../context/TasksContext';
import { Task } from '../types/Task';
import { useNavigation } from '@react-navigation/native';
import { TaskDetailNavigationProp } from '../types/Task';

const HomeScreen = () => {
  const { state, dispatch } = useTasksContext();
  const navigation = useNavigation<TaskDetailNavigationProp>();

  useEffect(() => {
    const dummyTasks = [
      { id: 1, title: 'Tarea 1', category: 'Personal', description: 'efwefewfefwewfe', completed: false },
      { id: 2, title: 'Tarea 2', category: 'Trabajo', description: 'efwefewfefwewfe', completed: true },
      { id: 3, title: 'Tarea 3', category: 'Estudio', description: 'efwefewfefwewfe', completed: false },
    ];

    const dummyCategories = [...new Set(dummyTasks.map((task) => task.category))];

    if (state.tasks.length === 0) {
      dummyTasks.forEach((task) => dispatch({ type: 'ADD_TASK', payload: task }));
    }
    if (state.categories.length === 0) {
      dummyCategories.forEach((category) => dispatch({ type: 'ADD_CATEGORY', payload: category }));
    }
  }, [dispatch, state.tasks.length, state.categories.length]);

  const handleTaskPress = (task: Task) => {
    navigation.navigate('Detalles', { task });
  };

  const handleCategorySelect = (category: string) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: category });
  };

  const filteredTasks = state.selectedCategory
    ? state.tasks.filter((task) => task.category === state.selectedCategory)
    : state.tasks;

  const renderItem = ({ item }: { item: Task }) => (
    <TouchableOpacity onPress={() => handleTaskPress(item)}>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Text>Lista de Tareas:</Text>
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>Filtrar por categoría:</Text>
      <FlatList
        data={state.categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategorySelect(item)}>
            <View>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
