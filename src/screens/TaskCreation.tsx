import * as React from 'react';
import {View, Text} from 'react-native';
import MyButton from '../components/MyButton';
import {useApp} from '../context/Context';

const TaskCreation = () => {

  const {addTask} = useApp();
  
  const addNewTask = () => {
    const demoTask = {
      title: 'Lorem ipsum dolor sit amet 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam minus placeat ea doloribus sequi. Explicabo debitis, corrupti consectetur repudiandae rerum labore dolorem, tenetur odio dolor neque accusantium molestias distinctio?',
      category: 'doloribus',
      status: false,
    };
    addTask(demoTask);
  };

  return (
    <View>
      <Text>TaskCreation</Text>
      <MyButton title="Submit" onPress={addNewTask}/>
    </View>
  );
};

export default TaskCreation;
