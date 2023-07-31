import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {HomeNavigatorProps} from '../navigation/HomeNavigator';
import {useTodos} from '../hooks/useTodos';

type TaskDetailsScreenProps = StackScreenProps<
  HomeNavigatorProps,
  'task-details'
>;

const TaskDetailsScreen = ({
  navigation: {goBack},
  route,
}: TaskDetailsScreenProps) => {
  const {taskIndex} = route.params;
  const {toggleTodo, deleteTodo, todos} = useTodos();

  if (!todos[taskIndex]) {
    return null;
  }

  const {category, completed, description, title} = todos[taskIndex];

  const handleChangeStatus = () => {
    toggleTodo(taskIndex);
  };

  const handleDelete = () => {
    deleteTodo(taskIndex);
    goBack();
  };

  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Category: {category}</Text>
      <View style={{marginTop: 4}} />
      <Text>Description: {description}</Text>
      <View style={{marginTop: 4}} />
      <Text>status: {completed ? 'Completed' : 'Pending'}</Text>
      <View style={{marginTop: 16}} />
      <Button title="Change Status" onPress={handleChangeStatus} />
      <View style={{marginTop: 16}} />
      <Button title="Delete Todo" onPress={handleDelete} />
      <View style={{marginTop: 16}} />
      <Button title="Go back" onPress={goBack} />
    </View>
  );
};

export default TaskDetailsScreen;
