import {View, Text} from 'react-native';
import React, {FC} from 'react';
import type {TaskListScreenProps} from '../../navigation/app-navigator.types';
import {useAppCtx} from '../../context';

export const TaskListScreen: FC<TaskListScreenProps> = () => {
  const {tasks} = useAppCtx();

  return (
    <View>
      {tasks.map(({id, title}) => (
        <Text key={id}>{title}</Text>
      ))}
    </View>
  );
};
