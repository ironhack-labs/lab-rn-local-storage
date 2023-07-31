import React from 'react';

import type {TaskCreationScreenProps} from '../../navigation/app-navigator.types';
import {AddTaskForm} from '../../components';

export const TaskCreationScreen = ({navigation}: TaskCreationScreenProps) => (
  <AddTaskForm onSuccess={() => navigation.navigate('TaskList')} />
);
