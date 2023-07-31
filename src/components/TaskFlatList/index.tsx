import React from 'react';
import {FlatList} from 'react-native';

import type {Task} from '../../types/Task.type';

import {useAppContext} from '../../hooks/useAppContext';

import TaskItem from '../TaskItem';

type TaskFlatListProps = {
  tasks: Task[];
};

const TaskFlatList = ({tasks}: TaskFlatListProps) => {
  const {activeCategory} = useAppContext();

  return (
    <FlatList
      data={
        activeCategory
          ? tasks.filter(task => task.category === activeCategory)
          : tasks
      }
      renderItem={({item}) => <TaskItem task={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TaskFlatList;
