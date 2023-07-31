import {FormInput, GoBackButton} from '../components';
import {Task} from '../types';
import {useAppNavigation, useTasksContext} from '../hooks';
import {useForm} from 'react-hook-form';
import {View, Text} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {taskFormStyles} from '../theme/TaskForm.styles';

const TaskCreationScreen = () => {
  const {goBack} = useAppNavigation();
  const {control, handleSubmit, formState} = useForm<Task>();
  const {errors} = formState;
  const {addTask, tasks} = useTasksContext();

  const handleAddTask = (task: Task) => {
    try {
      const newTask: Task = {...task, id: tasks.length + 1, isCompleted: false};
      addTask(newTask);
      goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={taskFormStyles.container}>
      <GoBackButton />
      <Text style={taskFormStyles.title}>Create new task</Text>
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
      <Button
        onPress={handleSubmit(handleAddTask)}
        title="Add task"
        color="#03DAC590"
        styles={taskFormStyles.addButton}
      />
    </View>
  );
};

export default TaskCreationScreen;
