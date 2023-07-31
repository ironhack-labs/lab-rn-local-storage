import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../hooks';

const AddTaskButton = () => {
  const {navigate} = useAppNavigation();
  return (
    <TouchableOpacity onPress={() => navigate('TaskCreation')}>
      <Text>AddTask</Text>
    </TouchableOpacity>
  );
};

export default AddTaskButton;
