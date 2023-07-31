import {View} from 'react-native';
import React from 'react';

import {useForm, Controller, SubmitHandler} from 'react-hook-form';

import {useAppCtx} from '../../context';
import {addTaskFormStyles} from './add-task-form.styles';
import type {Task} from '../../types';
import {
  Input,
  Text,
  Button,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';
import {ALL_TASK_CATEGORIES} from '../../__mocks__';

type AddTaskFormValues = Pick<Task, 'title' | 'description'> & {
  category: IndexPath;
};
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
    await addTask({
      ...data,
      category: ALL_TASK_CATEGORIES[data.category.row],
    });
    onSuccess();
  };

  const inputs: {
    label: string;
    input: keyof Pick<AddTaskFormValues, 'title' | 'description'>;
  }[] = [
    {
      label: 'Title',
      input: 'title',
    },
    {
      label: 'Description',
      input: 'description',
    },
  ];

  return (
    <View style={addTaskFormStyles.form}>
      {inputs.map(({label, input}) => (
        <View key={input}>
          <Controller
            name={input}
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange}}) => (
              <Input
                label={evaProps => <Text {...evaProps}>{label}</Text>}
                status={errors[input] ? 'danger' : 'default'}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
      ))}

      <View>
        <Controller
          name="category"
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <Select
              label={evaProps => <Text {...evaProps}>Category</Text>}
              value={ALL_TASK_CATEGORIES[value?.row]}
              selectedIndex={value}
              status={errors.category ? 'danger' : 'default'}
              onSelect={index => onChange(index)}>
              {ALL_TASK_CATEGORIES.map(category => (
                <SelectItem key={category} title={category} />
              ))}
            </Select>
          )}
        />
      </View>

      <Button activeOpacity={0.8} onPress={handleSubmit(onSubmit)}>
        Create Task
      </Button>
    </View>
  );
};
