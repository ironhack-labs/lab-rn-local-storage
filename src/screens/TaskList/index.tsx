import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {NativeStackParamList} from '../../types/Stack.type';

import {FloatingActionButton, TaskFlatList} from '../../components';

import {TASK_CREATION, TASK_LIST} from '../../constants/screens';

import {useAppContext} from '../../hooks/useAppContext';

import styles from './styles';

type TaskListProps = NativeStackScreenProps<
  NativeStackParamList,
  typeof TASK_LIST
>;

const TaskList = ({navigation}: TaskListProps) => {
  const {tasks} = useAppContext();

  const handleGoToCreation = () => navigation.navigate(TASK_CREATION);

  return (
    <SafeAreaView style={styles.container}>
      {tasks.length === 0 ? (
        <Text>No tasks</Text>
      ) : (
        <TaskFlatList tasks={tasks} />
      )}
      <FloatingActionButton action={handleGoToCreation}>
        <Text style={styles.fabContent}>+</Text>
      </FloatingActionButton>
    </SafeAreaView>
  );
};

export default TaskList;
