import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TaskListItemProps} from '../types';
import {useAppNavigation} from '../hooks';
import {taskListItemStyles} from '../theme/TaskListItem.styles';

const TaskListItem = ({task}: TaskListItemProps) => {
  const {navigate} = useAppNavigation();

  const {category, isCompleted, title} = task;

  return (
    <TouchableOpacity
      onPress={() => navigate('TaskDetails', {task})}
      style={taskListItemStyles.container}>
      <View>
        <Text style={taskListItemStyles.title}>{title}</Text>
        <Text style={taskListItemStyles.category} numberOfLines={4}>
          {category}
        </Text>

        <View
          style={[
            taskListItemStyles.statusContainer,
            {backgroundColor: isCompleted ? '#03DAC5' : 'red'},
          ]}>
          <Text style={taskListItemStyles.statusText}>
            {isCompleted ? 'Completed' : 'Incomplete'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskListItem;
