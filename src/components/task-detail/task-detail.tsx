import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Card, Text, Layout} from '@ui-kitten/components';

import type {Task} from '../../types';
import {NavigationProps} from '../../navigation/app-navigator.types';
import {useAppCtx} from '../../context';
import {taskDetailStyles} from './task-detail.styles';

type TaskDetailProps = Task;

export const TaskDetail = ({
  id,
  title,
  description,
  category,
  status,
}: TaskDetailProps) => {
  const {completeTask, deleteTask} = useAppCtx();
  const {navigate} = useNavigation<NavigationProps>();

  const onDeleteTask = () => {
    deleteTask(id);
    navigate('TaskList');
  };

  const onCompleteTask = () => {
    completeTask(id);
    navigate('TaskList');
  };

  return (
    <Card>
      <Layout style={taskDetailStyles.row}>
        <Text category="h6">{title}</Text>
      </Layout>

      <Layout style={taskDetailStyles.row}>
        <Text>{description}</Text>
      </Layout>

      <Layout style={taskDetailStyles.row}>
        <Text>Category: {category}</Text>
        <Text>Status: {status}</Text>
      </Layout>

      <Layout style={taskDetailStyles.buttonGroup}>
        {status === 'pending' && (
          <Button onPress={onCompleteTask} status="primary" size="small">
            Complete
          </Button>
        )}
        <Button onPress={onDeleteTask} status="danger" size="small">
          Delete
        </Button>
      </Layout>
    </Card>
  );
};
