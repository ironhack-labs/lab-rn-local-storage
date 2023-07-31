import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

import type {Task} from '../../types/Task.type';

import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

type TaskItemProps = PropsWithChildren<{
  task: Task;
}>;

const TaskItem = ({task}: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.taskInfoContainer}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{task.category}</Text>
        </View>
      </View>
      <CheckBox value={task.completed} onValueChange={newValue => {}} />
    </View>
  );
};

export default TaskItem;
