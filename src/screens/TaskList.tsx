import * as React from 'react';
import {View} from 'react-native';
import Task from '../components/Task';
import {useApp} from '../context/Context';

const TaskList = () => {
  const {tasks} = useApp();

  return (
    <View>
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          description={task.description}
          category={task.category}
          status={task.status}
          id={task.id}
        />
      ))}
    </View>
  );
};

export default TaskList;
