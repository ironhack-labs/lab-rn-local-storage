import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {NativeStackParamList} from '../../types/Stack.type';
import type {Task} from '../../types/Task.type';

import {useAppContext} from '../../hooks/useAppContext';

import {GoBack} from '../../components';

import {TASK_DETAILS} from '../../constants/screens';

import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

type TaskDetailsProps = NativeStackScreenProps<
  NativeStackParamList,
  typeof TASK_DETAILS
>;

const TaskDetails = ({navigation, route}: TaskDetailsProps) => {
  const {task} = route.params;

  const {updateTask, deleteTask} = useAppContext();

  const [formValues, setFormValues] = useState(task);

  const handleFormValuesChange = (key: keyof Task, value: string | boolean) => {
    setFormValues({...formValues, [key]: value});
  };

  const handleUpdateTask = () => {
    const updatedTask: Task = {
      ...formValues,
      category: formValues.category.toLowerCase(),
    };

    updateTask(updatedTask);

    navigation.goBack();
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBack text="Volver a Mis tareas" />
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Estatus</Text>
          <CheckBox
            value={task.completed}
            animationDuration={0.15}
            onValueChange={newValue =>
              handleFormValuesChange('completed', newValue)
            }
          />
        </View>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          defaultValue={task.title}
          placeholder="Título"
          onChangeText={text => handleFormValuesChange('title', text)}
        />
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.inputMultiline}
          autoCorrect={false}
          defaultValue={task.description}
          placeholder="Descripción"
          onChangeText={text => handleFormValuesChange('description', text)}
          multiline
        />
        <Text style={styles.label}>Categoría</Text>
        <TextInput
          style={styles.input}
          defaultValue={task.category}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Categoría"
          onChangeText={text => handleFormValuesChange('category', text)}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={handleUpdateTask}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Update</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={handleDeleteTask}>
        <View style={styles.button}>
          <Text style={styles.textDeleteButton}>Delete</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TaskDetails;
