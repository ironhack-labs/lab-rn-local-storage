import {View} from 'react-native';
import React from 'react';

import {useForm, Controller, SubmitHandler} from 'react-hook-form';

import {useAppCtx} from '../../context';
import {addTaskFormStyles} from './add-task-form.styles';
import type {Task} from '../../types';
import {Input, Text, Button} from '@ui-kitten/components';

type AddTaskFormValues = Omit<Task, 'id' | 'completion' | 'status'>;
type AddTaskFormProps = {
  onSuccess: () => void;
};

export const AddTaskForm = ({onSuccess}: AddTaskFormProps) => {
  const {addTask} = useAppCtx();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AddTaskFormValues>();

  const onSubmit: SubmitHandler<AddTaskFormValues> = async data => {
    await addTask(data);
    onSuccess();
  };

  const inputs: {
    label: string;
    name: keyof AddTaskFormValues;
  }[] = [
    {
      label: 'Title',
      name: 'title',
    },
    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Category',
      name: 'category',
    },
  ];

  return (
    <View style={addTaskFormStyles.form}>
      {inputs.map(({label, name}) => (
        <View key={name}>
          <Controller
            name={name}
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange}}) => (
              <Input
                label={evaProps => (
                  <Text {...evaProps} category="h1">
                    {label}
                  </Text>
                )}
                status={errors[name] ? 'danger' : 'primary'}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
      ))}

      <Button activeOpacity={0.8} onPress={handleSubmit(onSubmit)}>
        Create Task
      </Button>
    </View>
  );
};
