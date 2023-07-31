import React from 'react';

import type {TaskDetailsScreenProps} from '../../navigation/app-navigator.types';
import {TaskDetail} from '../../components';

export const TaskDetailsScreen = ({
  route: {
    params: {task},
  },
}: TaskDetailsScreenProps) => <TaskDetail {...task} />;
