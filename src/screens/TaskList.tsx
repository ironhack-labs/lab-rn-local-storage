import * as React from 'react';
import {View, Text} from 'react-native';
import {Tasks} from '../types/types';
import Task from '../components/Task';

const tasks: Tasks = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam minus placeat ea doloribus sequi. Explicabo debitis, corrupti consectetur repudiandae rerum labore dolorem, tenetur odio dolor neque accusantium molestias distinctio?',
    category: 'doloribus',
    status: false,
  },
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
      {tasks.map((task, index) => (
        <Task data={task} key={index} />
      ))}
    </View>
  );
};

export default TaskList;
