import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {NativeStackParamList} from '../../types/Stack.type';
import type {NewTask} from '../../types/Task.type';

import {useAppContext} from '../../hooks/useAppContext';

import {GoBack} from '../../components';

import {TASK_CREATION} from '../../constants/screens';

import styles from './styles';

const initialFormValues: NewTask = {
  title: '',
  description: '',
  category: '',
  completed: false,
};

type TaskCreationProps = NativeStackScreenProps<
  NativeStackParamList,
  typeof TASK_CREATION
>;

const TaskCreation = ({navigation}: TaskCreationProps) => {
  const {addTask} = useAppContext();

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleFormValuesChange = (key: keyof NewTask, value: string) => {
    setFormValues({...formValues, [key]: value});
  };

  const handleCreateTask = () => {
    const newTask: NewTask = {
      ...formValues,
      category: formValues.category.toLowerCase(),
    };

    addTask(newTask);

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBack text="Volver a Mis tareas" />
      <View style={styles.container}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Título"
          onChangeText={text => handleFormValuesChange('title', text)}
        />
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.inputMultiline}
          autoCorrect={false}
          placeholder="Descripción"
          onChangeText={text => handleFormValuesChange('description', text)}
          multiline
        />
        <Text style={styles.label}>Categoría</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Categoría"
          onChangeText={text => handleFormValuesChange('category', text)}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={handleCreateTask}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Crear</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TaskCreation;
