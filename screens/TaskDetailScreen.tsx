/* eslint-disable react/react-in-jsx-scope */
import {useContext, useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {RootStackParamList, Task, TaskStatus, TaskTypes} from '../types/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

type TaskDetailScreenNavigatorProps = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

type DetailScreenRouteProps = RouteProp<RootStackParamList, 'Details'>;

interface TaskDetailScreenProps {
  navigation: TaskDetailScreenNavigatorProps;
  route: DetailScreenRouteProps;
}

export const TaskDetailScreen = ({
  navigation,
  route,
}: TaskDetailScreenProps) => {
  const {id} = route.params;

  const {state, updateTask, deleteTask} = useContext(TaskContext);
  const [task, setTask] = useState<Task>({
    id: '',
    name: '',
    description: '',
    status: TaskStatus.IN_PROGRESS,
    type: TaskTypes.EMPTY,
  });

  const getTask = (idObtained: string) => {
    setTask(state.tasks.find(t => t.id === idObtained));
  };

  const onUpdatedTask = (taskReceived: Task) => {
    const updatedTask = {...taskReceived, status: TaskStatus.COMPLETE};
    updateTask(updatedTask);
  };

  const onDeleteTask = (taskReceived: Task) => {
    deleteTask(taskReceived);
    navigation.goBack();
  };

  useEffect(() => {
    getTask(id);
  });

  return (
    <>
      <View>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Task Details</Text>
        <Text style={styles.title}>Task Title</Text>
        <Text>{task.name}</Text>

        <Text style={styles.title}>Task Description</Text>
        <Text>{task.description}</Text>

        <Text style={styles.title}>Task type</Text>
        <Text>{task.type}</Text>

        <Text style={styles.title}>Task Status</Text>
        <Text>{task.status}</Text>
      </View>
      <View>
        <Button title="Complete the Task" onPress={() => onUpdatedTask(task)} />
        <Button title="Delete the Task" onPress={() => onDeleteTask(task)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
