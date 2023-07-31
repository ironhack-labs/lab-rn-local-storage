import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';

import type {TaskListScreenProps} from '../../navigation/app-navigator.types';
import {useAppCtx} from '../../context';

export const TaskListScreen = ({navigation}: TaskListScreenProps) => {
  const {tasks} = useAppCtx();

  return (
    <View>
      {tasks.map(({id, title}) => (
        <Text key={id}>{title}</Text>
      ))}

      <Button onPress={() => navigation.navigate('TaskCreation')}>
        Add Task
      </Button>
    </View>
  );
};
