import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TaskStatusItemProps {
  completed: boolean;
}

const TaskStatusItem = ({ completed }: TaskStatusItemProps) => {
  const statusStyle = {
    backgroundColor: completed ? '#00cc00' : '#ff9933',
    borderColor: completed ? '#00cc00' : '#ff9933',
    color: completed ? 'white' : '#ff9933',
  };

  return (
    <View style={[styles.taskStatus, statusStyle]}>
      <Text style={styles.taskStatusText}>{completed ? 'Completada' : 'Pendiente'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskStatus: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  taskStatusText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white'
  },
});

export default TaskStatusItem;
