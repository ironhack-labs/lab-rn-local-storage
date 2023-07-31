import React from 'react';
import {FlatList} from 'react-native';

import type {Task} from '../../types/Task.type';

import TaskItem from '../TaskItem';

type TaskFlatListProps = {
  tasks: Task[];
};

const TaskFlatList = ({tasks}: TaskFlatListProps) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => <TaskItem task={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TaskFlatList;
