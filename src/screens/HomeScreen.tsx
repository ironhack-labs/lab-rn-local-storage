import React, { useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTasksContext } from '../context/TasksContext';
import { Task } from '../types/Task';
import { useNavigation } from '@react-navigation/native';
import { TaskDetailNavigationProp } from '../navigation/AppNavigator';

const HomeScreen = () => {
  const { state, dispatch } = useTasksContext();
  const navigation = useNavigation<TaskDetailNavigationProp>();

  useEffect(() => {
    // Simulación de carga de datos desde el dispositivo (esto se puede reemplazar con la lógica de carga de datos desde el almacenamiento del dispositivo)
    const dummyTasks = [
      { id: 1, title: 'Tarea 1', category: 'Personal', description: 'efwefewfefwewfe', completed: false },
      { id: 2, title: 'Tarea 2', category: 'Trabajo', description: 'efwefewfefwewfe', completed: true },
      { id: 3, title: 'Tarea 3', category: 'Estudio', description: 'efwefewfefwewfe', completed: false },
    ];

    // Agregar tareas al estado solo si está vacío
    if (state.tasks.length === 0) {
      dummyTasks.forEach((task) => dispatch({ type: 'ADD_TASK', payload: task }));
    }
  }, [dispatch, state.tasks.length]);

  const handleTaskPress = (task: Task) => {
    navigation.navigate('Detalles', { task });
  };

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
        data={state.tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
