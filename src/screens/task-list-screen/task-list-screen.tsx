import React from 'react';
import {View} from 'react-native';
import {Button, List, ListItem, Icon, Divider} from '@ui-kitten/components';

import type {TaskListScreenProps} from '../../navigation/app-navigator.types';
import {useAppCtx} from '../../context';

export const TaskListScreen = ({navigation}: TaskListScreenProps) => {
  const {tasks} = useAppCtx();

  return (
    <View style={{flex: 1}}>
      <List
        data={tasks}
        ItemSeparatorComponent={Divider}
        renderItem={({item: task}) => (
          <ListItem
            title={task.title}
            description={task.description}
            // eslint-disable-next-line react/no-unstable-nested-components
            accessoryLeft={props => (
              <Icon
                {...props}
                name={
                  task.completion
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
