import * as React from 'react';
import {FlatList} from 'react-native';
import Task from '../components/Task';
import {useApp} from '../context/Context';

const TaskList = () => {
  const {tasks} = useApp();

  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => (
        <Task
          title={item.title}
          description={item.description}
          category={item.category}
          status={item.status}
          id={item.id}
        />
      )}
      keyExtractor={item => {
        return item.id;
      }}
    />
  );
};

export default TaskList;
