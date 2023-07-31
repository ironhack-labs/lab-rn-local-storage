import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, TextInput, Button} from 'react-native';
import {TodoProps} from '../context';
import {useTodos} from '../hooks/useTodos';
import CustomScreenContainer from '../components/CustomScreenContainer';

type Inputs = Omit<TodoProps, 'completed'>;

const AddTaskScreen = () => {
  const {control, handleSubmit, reset} = useForm<Inputs>();
  const {addTodo} = useTodos();

  const onSubmit = (data: Inputs) => {
    addTodo({...data, completed: false});
    reset();
  };

  return (
    <CustomScreenContainer>
      <Controller
        control={control}
        name="title"
        render={({field: {onBlur, onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Title"
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({field: {onBlur, onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Description"
          />
        )}
      />
      <Controller
        control={control}
        name="category"
        render={({field: {onBlur, onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Category"
          />
        )}
      />
      <Button title="Save task" onPress={handleSubmit(onSubmit)} />
    </CustomScreenContainer>
  );
};

export default AddTaskScreen;
