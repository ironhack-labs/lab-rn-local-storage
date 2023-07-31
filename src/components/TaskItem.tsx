import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onPress: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{task.title}</Text>
        <Text>{task.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
