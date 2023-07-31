import * as React from 'react';
import {View, Text} from 'react-native';
import {Tasks} from '../types/types';

const tasks: Tasks = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam minus placeat ea doloribus sequi. Explicabo debitis, corrupti consectetur repudiandae rerum labore dolorem, tenetur odio dolor neque accusantium molestias distinctio?',
    category: 'doloribus',
    status: false,
  },
];

const TaskList = () => {
  return (
    <View>
      {tasks.map(task => (
        <Text>{task.title}</Text>
      ))}
    </View>
  );
};

export default TaskList;
