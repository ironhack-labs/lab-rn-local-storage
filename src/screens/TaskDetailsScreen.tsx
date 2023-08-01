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
import {globalStyles} from '../theme/Global.styles';
import {taskDetailsStyles} from '../theme/TaskDetails.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetails'>;

export const TaskDetailsScreen = ({route, navigation}: Props) => {
  const {task, index} = route.params;
  const {markAsCompleted, TaskState, deleteTask} = useContext(TaskContext);

  const [taskDetails, settaskDetails] = useState(route.params.task);

  useEffect(() => {
    settaskDetails(route.params.task);
  }, [route.params]);

  useEffect(() => {
    if (TaskState.items[index]) settaskDetails(TaskState.items[index]);
  }, [TaskState.items]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}>
        <View>
          <Text style={taskDetailsStyles.title}>Titulo</Text>
          <Text style={taskDetailsStyles.subtitle}>{taskDetails.title}</Text>
        </View>
        <View>
          <Text style={taskDetailsStyles.title}>Descripcion</Text>
          <Text style={taskDetailsStyles.subtitle}>
            {taskDetails.description}
          </Text>
        </View>
        <View>
          <Text style={taskDetailsStyles.title}>Categoria</Text>
          <Text style={taskDetailsStyles.subtitle}>
            {taskDetails.categories}
          </Text>
        </View>
        <View>
          <Text style={taskDetailsStyles.title}>Estatus</Text>
          <Text style={taskDetailsStyles.subtitle}>{taskDetails.status}</Text>
        </View>
      </ScrollView>

      <View style={taskDetailsStyles.buttonsContainer}>
        {taskDetails.status !== 'completed' && (
          <TouchableOpacity
            style={{...taskDetailsStyles.button, backgroundColor: 'green'}}
            onPress={() => markAsCompleted(index)}>
            <Text>Marcar como completada</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{...taskDetailsStyles.button, backgroundColor: 'red'}}
          onPress={() => {
            deleteTask(index);
            navigation.navigate('TaskList');
          }}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
