import {View, Text} from 'react-native';
import React from 'react';
import {useTasksContext} from '../hooks';

const TasksListScreen = () => {
  const {tasks} = useTasksContext();
  return (
    <View>
      <Text>{JSON.stringify(tasks, null, 4)}</Text>
    </View>
  );
};

export default TasksListScreen;
