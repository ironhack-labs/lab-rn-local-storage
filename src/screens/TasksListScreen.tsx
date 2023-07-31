import {TaskListItem} from '../components';
import {useAppNavigation, useTasksContext} from '../hooks';
import {View, FlatList} from 'react-native';
import Button from '../components/Button';
import React from 'react';

const TasksListScreen = () => {
  const {tasks} = useTasksContext();
  const {navigate} = useAppNavigation();

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskListItem task={item} />}
      />
      <Button
        color="#03DAC590"
        title="Create task"
        onPress={() => navigate('TaskCreation')}
      />
    </View>
  );
};

export default TasksListScreen;
