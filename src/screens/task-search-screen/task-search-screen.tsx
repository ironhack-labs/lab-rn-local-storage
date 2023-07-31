import React, {useState} from 'react';

import {Icon, Input} from '@ui-kitten/components';

import type {TaskSearchScreenProps} from '../../navigation/app-navigator.types';
import {useAppCtx} from '../../context';
import {TaskList} from '../../components';

export const TaskSearchScreen = ({navigation}: TaskSearchScreenProps) => {
  const {tasks} = useAppCtx();
  const [search, setSearch] = useState('');

  const onSearch = (text: string) => {
    setSearch(text);
  };

  const tasksData = search
    ? tasks.filter(({title, category}) => {
        const regex = new RegExp(search, 'i');
        return regex.test(title) || regex.test(category);
      })
    : [];

  return (
    <>
      <Input
        placeholder="Search..."
        status="default"
        onChangeText={onSearch}
        accessoryLeft={props => <Icon {...props} name="search-outline" />}
      />
      <TaskList
        tasks={tasksData}
        onTaskPress={task => navigation.navigate('TaskDetails', {task})}
      />
    </>
  );
};
