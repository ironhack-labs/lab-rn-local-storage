import React, {FC} from 'react';
import {View} from 'react-native';

import {Text} from '@ui-kitten/components';

import type {TaskSearchScreenProps} from '../../navigation/app-navigator.types';

export const TaskSearchScreen: FC<TaskSearchScreenProps> = () => {
  return (
    <View style={{flex: 1}}>
      <Text>TaskSearchScreen</Text>
    </View>
  );
};
