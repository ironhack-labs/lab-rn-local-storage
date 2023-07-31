import React from 'react';

import type {TaskListScreenProps} from '../../navigation/app-navigator.types';
import {useAppCtx} from '../../context';
import {TaskList} from '../../components';

export const TaskListScreen = ({navigation}: TaskListScreenProps) => {
  const {tasks, filters} = useAppCtx();

  const tasksData = filters.length
    ? tasks.filter(({category}) => filters.includes(category))
    : tasks;

  return (
    <TaskList
      tasks={tasksData}
      onTaskPress={task => navigation.navigate('TaskDetails', {task})}
    />
  );
};
