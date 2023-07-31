import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../navigation/RootStack';
import {TaskContext} from '../context/TaskContext';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetails'>;

export const TaskDetailsScreen = ({route, navigation}: Props) => {
  const {task, index} = route.params;
  const {markAsCompleted, TaskState, deleteTask} = useContext(TaskContext);

  const [taskDetails, settaskDetails] = useState(route.params.task);

  useEffect(() => {
    settaskDetails(route.params.task);
  }, [route.params]);

  useEffect(() => {
    if(TaskState.items[index])
    settaskDetails(TaskState.items[index]);
  }, [TaskState.items]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}>
        <View
          style={{
            ...styles.container,
          }}>
          <Text style={styles.title}>Titulo</Text>
          <Text style={styles.regularText}>{taskDetails.title}</Text>
        </View>
        <View
          style={{
            ...styles.container,
          }}>
          <Text style={styles.title}>Descripcion</Text>
          <Text style={styles.regularText}>{taskDetails.description}</Text>
        </View>
        <View
          style={{
            ...styles.container,
          }}>
          <Text style={styles.title}>Categoria</Text>
          <Text style={styles.regularText}>{taskDetails.categories}</Text>
        </View>
        <View
          style={{
            ...styles.container,
          }}>
          <Text style={styles.title}>Estatus</Text>
          <Text style={styles.regularText}>{taskDetails.status}</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        {taskDetails.status !== 'completed' && (
          <TouchableOpacity
            style={{...styles.button, backgroundColor: 'green'}}
            onPress={() => markAsCompleted(index)}>
            <Text>Marcar como completada</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{...styles.button, backgroundColor: 'red'}}
          onPress={() => {
            deleteTask(index);
            navigation.navigate("TaskList")
          }}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 15,
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
