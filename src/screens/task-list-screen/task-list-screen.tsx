import React from 'react';
import {View} from 'react-native';

import {
  Button,
  List,
  ListItem,
  Icon,
  Divider,
  Text,
} from '@ui-kitten/components';

import type {TaskListScreenProps} from '../../navigation/app-navigator.types';
import {useAppCtx} from '../../context';

export const TaskListScreen = ({navigation}: TaskListScreenProps) => {
  const {tasks, filters} = useAppCtx();

  const tasksData = filters.length
    ? tasks.filter(({category}) => filters.includes(category))
    : tasks;

  return (
    <View style={{flex: 1}}>
      <List
        data={tasksData}
        ItemSeparatorComponent={Divider}
        renderItem={({item: task}) => (
          <ListItem
            onPress={() => navigation.navigate('TaskDetails', {task})}
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

      <Button onPress={() => navigation.navigate('TaskCreation')}>
        Add Task
      </Button>
    </View>
  );
};
