import {View, Text} from 'react-native';
import React, {FC} from 'react';
import type {TaskCreationScreenProps} from '../../navigation/app-navigator.types';

export const TaskCreationScreen: FC<TaskCreationScreenProps> = () => {
  return (
    <View>
      <Text>TaskCreation</Text>
    </View>
  );
};
