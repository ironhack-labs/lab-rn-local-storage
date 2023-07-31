import React, {PropsWithChildren} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';

import type {NativeStackParamList} from '../../types/Stack.type';
import type {Task} from '../../types/Task.type';

import {useAppContext} from '../../hooks/useAppContext';

import {TASK_DETAILS} from '../../constants/screens';

import styles from './styles';

type TaskItemProps = PropsWithChildren<{
  task: Task;
}>;

const TaskItem = ({task}: TaskItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

  const {toggleTask} = useAppContext();

  const handleGoToDetails = () => navigation.navigate(TASK_DETAILS, {task});

  const handleToggleTask = () => {
    toggleTask(task.id);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleGoToDetails}>
      <View style={styles.container}>
        <View style={styles.taskInfoContainer}>
          <Text
            style={{
              ...styles.title,
              ...(task.completed ? styles.titleCompleted : {}),
            }}>
            {task.title}
          </Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{task.category}</Text>
          </View>
        </View>
        <View
          onStartShouldSetResponder={() => true}
          onTouchEnd={e => {
            e.stopPropagation();
          }}>
          <CheckBox
            value={task.completed}
            onValueChange={handleToggleTask}
            animationDuration={0.15}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
