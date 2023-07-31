import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useAppNavigation, useTasksContext} from '../hooks';
import {AddTaskButton} from '../components';
import {Task} from '../types';

const TasksListScreen = () => {
  const {tasks, setTasks} = useTasksContext();
  const {navigate} = useAppNavigation();

  useEffect(() => {
    setTasks();
  }, [setTasks]);

  const onDetailPress = (task: Task) => {
    navigate('TaskDetails', {task});
  };
  return (
    <View>
      {tasks.map(x => (
        <TouchableOpacity onPress={() => onDetailPress(x)}>
          <Text>{JSON.stringify(x, null, 4)}</Text>
        </TouchableOpacity>
      ))}
      <AddTaskButton />
    </View>
  );
};

export default TasksListScreen;
