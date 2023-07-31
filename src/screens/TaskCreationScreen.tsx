import React, { useContext, useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import { AddButton } from '../components/AddButton';
import { Task } from '../types/Task';
import { TaskContext } from '../context/TaskContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, "TaskCreation">;


export const TaskCreationScreen = ({route, navigation} : Props) => {

  const {addTask} = useContext(TaskContext);

  const [tasksData, settasksData] = useState<Task>({
    title: '',
    description: "",
    status: "pending",
    categories: ""
  });
  const [errorMsg, seterrorMsg] = useState("")

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
    if(tasksData.title === "")
      return false;
    if(tasksData.description === "")
      return false;
    if(tasksData.categories === "")
      return false;
    return true;
  }


  const onAddTask = () => {
    if(validate()){
      addTask(tasksData)
      navigation.navigate("TaskList")
    }else{ 
      seterrorMsg("Todos los campos son obligatorios")
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          height: '75%',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder="Title"
          style={styles.formTextInput}
          value={tasksData.title}
          onChange={e => setValue('title', e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Description"
          style={styles.formTextInput}
          value={tasksData.description}
          onChange={e => setValue('description', e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Category"
          style={styles.formTextInput}
          value={tasksData.categories}
          onChange={e => setValue('categories', e.nativeEvent.text)}
        />
        <Text style={{color: 'red'}}>{errorMsg}</Text>
        <AddButton onPress={onAddTask} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formTextInput : {
    borderWidth:1,
    borderColor:"grey",
    width:"80%",
    paddingVertical:10,
    paddingLeft: 5
  },
})