import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TodoProps} from '../context';

type TaskItemProps = {
  todo: TodoProps;
  onPress: () => void;
};

const TaskItem = ({todo, onPress}: TaskItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Title: {todo.title}</Text>
      <Text>Category: {todo.category}</Text>
      <Text>Status: {todo.completed ? 'Completed!' : 'Pending'}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;

const styles = StyleSheet.create({});
