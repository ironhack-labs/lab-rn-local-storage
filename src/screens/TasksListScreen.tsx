import {TaskListItem} from '../components';
import {useAppNavigation, useTasksContext} from '../hooks';
import {View, FlatList, Text} from 'react-native';
import Button from '../components/Button';
import React from 'react';
import {taskListStyles} from '../theme/TaskList.styles';

const TasksListScreen = () => {
  const {tasks} = useTasksContext();
  const {navigate} = useAppNavigation();

  return (
    <View style={taskListStyles.container}>
      <Text style={taskListStyles.title}>Tasks List</Text>
      <FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}) => id.toString()}
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
