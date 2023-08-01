import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TaskContext} from '../context/TaskContext';
import {Task} from '../types/taskTypes';
import {RootStackParamList} from '../navigation/AppNavigator';
import {globalStyles} from '../styles';

type TaskDetailsScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetails'>;
type TaskDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TaskDetails'
>;

type Props = {
  route: TaskDetailsScreenRouteProp;
  navigation: TaskDetailsScreenNavigationProp;
};

const TaskDetailsScreen = ({route, navigation}: Props) => {
  const {taskId} = route.params;
  const {state, dispatch} = useContext(TaskContext);
  const task = state.tasks.find(task => task.id === taskId);

  const handleCompleteTask = () => {
    if (task) {
      dispatch({
        type: 'UPDATE_TASK_STATUS',
        payload: {taskId: task.id, completed: true},
      });
    }
  };

  const handleDeleteTask = () => {
    if (task) {
      dispatch({type: 'DELETE_TASK', payload: task.id});
      navigation.goBack();
    }
  };

  return (
    <View style={globalStyles.container}>
      {task ? (
        <View>
          <Text>Title: {task.title}</Text>
          <Text>Description: {task.description}</Text>
          <Text>Category: {task.category}</Text>
          <Text>Status: {task.completed ? 'Completed' : 'Pending'}</Text>
          <Button title="Mark as Completed" onPress={handleCompleteTask} />
          <Button title="Delete Task" onPress={handleDeleteTask} />
        </View>
      ) : (
        <Text>Task not found</Text>
      )}
    </View>
  );
};

export default TaskDetailsScreen;
