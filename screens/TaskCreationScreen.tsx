import React, {useContext, useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import {Task, TaskStatus, TaskTypes} from '../types/types';
import {TaskContext} from '../context/TaskContext';
import Dropdown from '../components/Dropdown';

type DropdownType = {label: string; value: string} | null;

export const TaskCreationScreen = () => {
  const {state, addTask} = useContext(TaskContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setSelected] = useState<DropdownType>();

  const data = [
    {label: TaskTypes.IT, value: TaskTypes.IT},
    {label: TaskTypes.MARKETING, value: TaskTypes.MARKETING},
    {label: TaskTypes.PROJECT, value: TaskTypes.PROJECT},
  ];

  const onSubmit = () => {
    const newTask: Task = {
      id: (state.tasks.length + 1).toString(),
      name,
      description,
      type: selected?.value as string,
      status: TaskStatus.IN_PROGRESS,
    };
    addTask(newTask);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDescription('');
  };

  return (
    <SafeAreaView>
      <Text style={styles.titleInput}>Task Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Task Name"
      />

      <Text style={styles.titleInput}>Task Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Task Description..."
      />

      <Text style={styles.titleInput}>Category</Text>

      <View style={styles.container}>
        <Dropdown
          label="Selecciona una opcion"
          data={data}
          onSelect={setSelected}
        />
      </View>

      <Button title="Submit" onPress={() => onSubmit()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
