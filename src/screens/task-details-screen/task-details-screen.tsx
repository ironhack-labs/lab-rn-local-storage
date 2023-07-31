import {View, Text} from 'react-native';
import React, {FC} from 'react';
import type {TaskDetailsScreenProps} from '../../navigation/app-navigator.types';

export const TaskDetailsScreen: FC<TaskDetailsScreenProps> = () => {
  return (
    <View>
      <Text>TaskDetails</Text>
    </View>
  );
};
