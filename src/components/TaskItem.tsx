import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Task } from '../types/Task';
import { TaskDetailNavigationProp } from '../types/Task';
import { useNavigation } from '@react-navigation/native';
import CategoryTaskItem from './CategoryTaskItem';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const navigation = useNavigation<TaskDetailNavigationProp>();

  const handleTaskPress = () => {
    navigation.navigate('Detalles', { task });
  };

  return (
    <TouchableOpacity onPress={handleTaskPress}>
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <CategoryTaskItem category={task.category}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    marginBottom: 16,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#00000010',
  },
  taskTitle:{
    fontSize: 16,
    fontWeight: '600'
  },
  taskDescription:{
    fontSize: 13,
    fontWeight: 'normal',
    color: '#00000075',
    paddingVertical: 8,
  },
});

export default TaskItem;
