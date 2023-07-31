import React, { useEffect } from 'react';
import { Text, FlatList, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTasksContext } from '../context/TasksContext';
import { Task } from '../types/Task';
import TaskItem from '../components/TaskItem';
import CategoryItem from '../components/CategoryItem';
import CategoryList from '../components/CategoryList';

const HomeScreen = () => {
  const { state, dispatch } = useTasksContext();

  useEffect(() => {
    const dummyTasks = [
      {
        id: 1,
        title: 'Tarea 1',
        category: 'Personal',
        description: 'efwefewfefwewfe',
        completed: false,
      },
      {
        id: 2,
        title: 'Tarea 2',
        category: 'Trabajo',
        description: 'efwefewfefwewfe',
        completed: true,
      },
      {
        id: 3,
        title: 'Tarea 3',
        category: 'Estudio',
        description: 'efwefewfefwewfe',
        completed: false,
      },
    ];

    const setCategories = ['Mostrar todo', ...new Set(dummyTasks.map(task => task.category))];

    if (state.tasks.length === 0) {
      dummyTasks.forEach(task => dispatch({ type: 'ADD_TASK', payload: task }));
    }
    if (state.categories.length === 0) {
      setCategories.forEach(category => dispatch({ type: 'ADD_CATEGORY', payload: category }));
    }
  }, [dispatch, state.tasks.length, state.categories.length]);

  const handleCategorySelect = (category: string) => {
    if (category === 'Mostrar todo') {
      dispatch({ type: 'SELECT_CATEGORY', payload: '' });
    } else {
      dispatch({ type: 'SELECT_CATEGORY', payload: category });
    }
  };

  const filteredTasks = state.selectedCategory
    ? state.tasks.filter(task => task.category === state.selectedCategory)
    : state.tasks;

  const renderItem = ({ item }: { item: Task }) => <TaskItem task={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <CategoryList
        categories={state.categories}
        selectedCategory={state.selectedCategory}
        onPressCategory={handleCategorySelect}
      />
      <Text style={styles.heading}>Lista de Tareas:</Text>
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
