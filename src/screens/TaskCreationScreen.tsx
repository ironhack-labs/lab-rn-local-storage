import {FormInput} from '../components';
import {Task} from '../types';
import {useAppNavigation, useTasksContext} from '../hooks';
import {useForm} from 'react-hook-form';
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TaskCreationScreen = () => {
  const {goBack} = useAppNavigation();
  const {control, handleSubmit, formState, reset} = useForm<Task>();
  const {errors} = formState;
  const {addTask, tasks} = useTasksContext();

  const handleAddTask = (task: Task) => {
    try {
      const newTask: Task = {...task, id: tasks.length + 1};
      addTask(newTask);
      goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>TaskCreationScreen</Text>
      <FormInput<Task>
        control={control}
        controlName="title"
        error={errors.title?.message}
        required
        inputProps={{placeholder: 'Clean home'}}
      />
      <FormInput<Task>
        control={control}
        controlName="description"
        error={errors.description?.message}
        required
        inputProps={{
          placeholder:
            'I need to clean the house so I can receive visitors tonight.',
        }}
      />
      {/* TODO: Cambiar a un dropdow */}
      <FormInput<Task>
        control={control}
        controlName="category"
        error={errors.category?.message}
        required
        inputProps={{
          placeholder: 'Cleanin.',
        }}
      />

      <TouchableOpacity onPress={handleSubmit(handleAddTask)}>
        <Text>Add task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCreationScreen;
