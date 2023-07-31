import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useTaskList } from '../context';
import { FormData } from '../types';

export default function TaskCreationScreen() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>();
  const { addTask } = useTaskList();

  const onSubmit = handleSubmit(data => {
    const newTask = {
      ...data,
      id: new Date().valueOf().toString(),
      completed: false,
    };
    console.log(newTask);
    // addTask(newTask);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Creation</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value || ''}
          />
        )}
        name="title"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value || ''}
          />
        )}
        name="description"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Category"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value || ''}
          />
        )}
        name="category"
      />

      <Button
        title="Submit"
        disabled={!isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
});
