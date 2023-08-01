import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {AddButton} from '../components/AddButton';
import {Task} from '../interfaces/Task';
import {TaskContext} from '../context/TaskContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import {creationTaskStyles} from '../theme/CreationTask.styles';
import {globalStyles} from '../theme/Global.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskCreation'>;

export const TaskCreationScreen = ({navigation}: Props) => {
  const {addTask} = useContext(TaskContext);

  const [tasksData, settasksData] = useState<Task>({
    title: '',
    description: '',
    status: 'pending',
    categories: '',
  });
  const [errorMsg, seterrorMsg] = useState('');

  const setValue = (key: keyof typeof tasksData, value: string) => {
    let auxtasksData = {...tasksData};
    switch (key) {
      case 'title':
        auxtasksData['title'] = value;
        break;

      case 'description':
        auxtasksData['description'] = value;
        break;

      case 'categories':
        auxtasksData['categories'] = value;
        break;

      default:
        break;
    }
    settasksData(auxtasksData);
  };

  const validate = () => {
    if (tasksData.title === '') return false;
    if (tasksData.description === '') return false;
    if (tasksData.categories === '') return false;
    return true;
  };

  const onAddTask = () => {
    if (validate()) {
      addTask(tasksData);
      navigation.navigate('TaskList');
    } else {
      seterrorMsg('Todos los campos son obligatorios');
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={creationTaskStyles.container}>
        <TextInput
          placeholder="Title"
          style={creationTaskStyles.input}
          value={tasksData.title}
          placeholderTextColor={'black'}
          onChange={e => setValue('title', e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Description"
          style={creationTaskStyles.input}
          value={tasksData.description}
          placeholderTextColor={'black'}
          onChange={e => setValue('description', e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Category"
          style={creationTaskStyles.input}
          value={tasksData.categories}
          placeholderTextColor={'black'}
          onChange={e => setValue('categories', e.nativeEvent.text)}
        />
        <Text style={{color: 'red'}}>{errorMsg}</Text>
        <AddButton onPress={onAddTask} />
      </View>
    </SafeAreaView>
  );
};
