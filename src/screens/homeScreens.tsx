import React, { useEffect } from 'react';
import { Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useTasksContext } from '../context/taksContext';
import TaskItem from '../components/taksItem';
import CategoryList from '../components/categoriaList';

const HomeScreen = () => {
  const { state, dispatch } = useTasksContext();

  useEffect(() => {
    const dummyTasks = [
   {
    id: 1,
    title: 'Comprar comestibles',
    category: 'Personal',
    description: 'Ir al supermercado y comprar frutas, verduras y productos básicos.',
    completed: false,
  },
  {
    id: 2,
    title: 'Preparar informe mensual',
    category: 'Trabajo',
    description: 'Recopilar datos y preparar un informe mensual para la reunión con el equipo.',
    completed: true,
  },
  {
    id: 3,
    title: 'Estudiar para el examen de matemáticas',
    category: 'Estudio',
    description: 'Repasar álgebra y geometría para el próximo examen de matemáticas.',
    completed: false,
  },
  {
    id: 4,
    title: 'Hacer ejercicio',
    category: 'Salud',
    description: 'Realizar una rutina de ejercicios de cardio y entrenamiento de fuerza.',
    completed: false,
  },
  {
    id: 5,
    title: 'Enviar correo electrónico de seguimiento',
    category: 'Trabajo',
    description: 'Enviar un correo electrónico de seguimiento a un cliente potencial.',
    completed: true,
  },
  {
    id: 6,
    title: 'Leer libro recomendado',
    category: 'Estudio',
    description: 'Leer el libro recomendado por el profesor para la clase de literatura.',
    completed: false,
  },
  {
    id: 7,
    title: 'Realizar compra en línea',
    category: 'Personal',
    description: 'Comprar ropa y accesorios en línea.',
    completed: false,
  },
  {
    id: 8,
    title: 'Preparar presentación para reunión de equipo',
    category: 'Trabajo',
    description: 'Crear una presentación para la próxima reunión del equipo.',
    completed: true,
  },
  {
    id: 9,
    title: 'Practicar habilidades de programación',
    category: 'Estudio',
    description: 'Resolver problemas de programación para mejorar las habilidades.',
    completed: false,
  },
  {
    id: 10,
    title: 'Hacer limpieza general del hogar',
    category: 'Hogar',
    description: 'Limpiar todas las habitaciones y realizar una limpieza profunda.',
    completed: false,
  },
  {
    id: 11,
    title: 'Caminar al aire libre',
    category: 'Salud',
    description: 'Dar un paseo al aire libre para mantenerse activo y relajarse.',
    completed: false,
  },
  {
    id: 12,
    title: 'Asistir a reunión de networking',
    category: 'Trabajo',
    description: 'Participar en un evento de networking para conocer nuevas personas en la industria.',
    completed: false,
  },
  {
    id: 13,
    title: 'Aprender un nuevo idioma',
    category: 'Estudio',
    description: 'Iniciar un curso de aprendizaje de un nuevo idioma para mejorar habilidades lingüísticas.',
    completed: false,
  },
  {
    id: 14,
    title: 'Meditar y practicar mindfulness',
    category: 'Salud',
    description: 'Realizar una sesión de meditación y practicar mindfulness para reducir el estrés.',
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
    dispatch({ type: 'SELECT_CATEGORY', payload: category === 'Mostrar todo' ? '' : category });
  };

  const filteredTasks = state.selectedCategory
    ? state.tasks.filter(task => task.category === state.selectedCategory)
    : state.tasks;

    const renderItem = ({ item }: { item: any }) => <TaskItem task={item} />;

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
