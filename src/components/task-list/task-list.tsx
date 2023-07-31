import React from 'react';
import {View} from 'react-native';

import {List, ListItem, Icon, Divider, Text} from '@ui-kitten/components';
import type {Task} from '../../types';

type TaskListProps = {
  tasks: Task[];
  onTaskPress: (task: Task) => void;
};

export const TaskList = ({tasks, onTaskPress}: TaskListProps) => (
  <View style={{flex: 1}}>
    <List
      data={tasks}
      ItemSeparatorComponent={Divider}
      renderItem={({item: task}) => (
        <ListItem
          onPress={() => onTaskPress(task)}
          title={task.title}
          description={task.description}
          accessoryRight={() => (
            <Text status="info" category="c2">
              {task.category}
            </Text>
          )}
          // eslint-disable-next-line react/no-unstable-nested-components
          accessoryLeft={props => (
            <Icon
              {...props}
              name={
                task.status === 'completed'
                  ? 'checkmark-square-2-outline'
                  : 'square-outline'
              }
            />
          )}
        />
      )}
    />
  </View>
);
