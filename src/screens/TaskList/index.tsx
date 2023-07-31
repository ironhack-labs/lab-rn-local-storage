import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {FloatingActionButton, TaskFlatList} from '../../components';

import {useAppContext} from '../../hooks/useAppContext';

import styles from './styles';

const TaskList = () => {
  const {tasks} = useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      {tasks.length === 0 ? (
        <Text>No tasks</Text>
      ) : (
        <TaskFlatList tasks={tasks} />
      )}
      <FloatingActionButton action={() => {}}>
        <Text style={styles.fabContent}>+</Text>
      </FloatingActionButton>
    </SafeAreaView>
  );
};

export default TaskList;
