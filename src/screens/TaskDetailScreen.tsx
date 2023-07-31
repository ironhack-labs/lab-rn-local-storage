import {FormInput} from '../components';
import {Task} from '../types';
import {TaskDetailScreenProps} from '../navigation/TaskStackNavigator';
import {useAppNavigation} from '../hooks';
import {useForm} from 'react-hook-form';
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const TaskDetailScreen = ({route}: TaskDetailScreenProps) => {
  const [readonly, setReadonly] = useState(true);
  const {goBack} = useAppNavigation();
  const {control, handleSubmit, formState} = useForm<Task>({
    defaultValues: {
      ...route.params.task,
    },
  });
  const {errors} = formState;

  const handleUpdateTask = (task: Task) => {
    console.log('handleUpdateTask', task);
    goBack();
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
        readonly={readonly}
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
        readonly={readonly}
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
        readonly={readonly}
      />

      {readonly ? (
        <TouchableOpacity onPress={() => setReadonly(false)}>
          <Text>Click for update task</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleSubmit(handleUpdateTask)}>
          <Text>Update task</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskDetailScreen;
