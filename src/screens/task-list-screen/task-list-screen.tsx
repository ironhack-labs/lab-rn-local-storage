import {View, Text} from 'react-native';
import React, {FC} from 'react';
import type {TaskListScreenProps} from '../../navigation/app-navigator.types';

export const TaskListScreen: FC<TaskListScreenProps> = () => {
  return (
    <View>
      <Text>TaskList</Text>
    </View>
  );
};
