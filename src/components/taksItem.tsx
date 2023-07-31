import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../types/taks';
import CategoryTaskItem from './categoriaTaskItem';
import { useNavigation } from '@react-navigation/native';
import { TaskDetailNavigationProp } from '../types/taks';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const navigation = useNavigation<TaskDetailNavigationProp>();
    const handleTaskPress = () => {
          navigation.navigate('Detalles', { task });
      };
  return (
    <TouchableOpacity onPress={handleTaskPress}>
      <View style={task.completed ? styles.taskItemGreen : styles.taskItem}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <CategoryTaskItem category={task.category}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    // Estilo para tarea no completada
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#E1E9F5',
    borderColor: '#7E5DE0',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskItemGreen: {
    // Estilo para tarea completada
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#B1DFBB',
    borderColor: '#206A5D',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A47A3',
    textAlign: 'center',
    marginBottom: 8,
  },
  taskDescription: {
    fontSize: 14,
    color: '#4287F5',
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default TaskItem;
