import {Alert, AlertButton, Text, View} from 'react-native';
import {ReadonlyInput} from '../components';
import {TaskDetailScreenProps} from '../navigation/TaskStackNavigator';
import {taskFormStyles} from '../theme/TaskForm.styles';
import {useTasksContext} from '../hooks';
import Button from '../components/Button';
import React, {useMemo} from 'react';

const TaskDetailScreen = ({route, navigation}: TaskDetailScreenProps) => {
  const {updateTaskStatus, removeTask} = useTasksContext();
  const {task} = route.params;
  const okAction: AlertButton = useMemo(
    () => ({
      text: 'Ok',
      onPress: () => navigation.navigate('TasksList'),
    }),
    [navigation],
  );
  const onChangeTaskStatusPress = () => {
    updateTaskStatus(task.id);
    Alert.alert('Task status', 'task status was successfully changed!', [
      okAction,
    ]);
  };

  const onRemovePress = () => {
    Alert.alert('Remove task', 'Are you sure to delete this task?', [
      {text: 'No'},
      {
        text: 'Yes',
        onPress: () => {
          removeTask(task.id);
          navigation.goBack();
          Alert.alert('Task removed', 'the task is deleted successfully', [
            okAction,
          ]);
        },
      },
    ]);
  };

  return (
    <View style={taskFormStyles.container}>
      <Text style={taskFormStyles.title}>Task {task.id} detail</Text>
      <ReadonlyInput value={task.title} />
      <ReadonlyInput value={task.description} />
      <ReadonlyInput value={task.category} />
      <View style={taskFormStyles.actionsRow}>
        <Button
          color="#ED2939"
          onPress={onRemovePress}
          title="Remove"
          styles={[taskFormStyles.actionButton, taskFormStyles.removeButton]}
        />
        <Button
          color="#03DAC590"
          onPress={onChangeTaskStatusPress}
          styles={taskFormStyles.actionButton}
          title={task.isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        />
      </View>
    </View>
  );
};

export default TaskDetailScreen;
