import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TaskCard} from '../components/TaskCard';
import {TaskContext} from '../context/TaskContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Task, TaskTypes} from '../types/types';
import Dropdown from '../components/Dropdown';
import {useIsFocused} from '@react-navigation/native';

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProps;
}

type DropdownType = {label: string; value: string} | '';

export const TaskListScreen = ({navigation}: HomeScreenProps) => {
  const {state} = useContext(TaskContext);
  const [taskList, setTaskList] = useState<Task[]>(state.tasks);
  const [selected, setSelected] = useState<DropdownType>({
    label: 'EMPTY',
    value: '',
  });

  const isFocused = useIsFocused();

  const data = [
    {label: TaskTypes.IT, value: TaskTypes.IT},
    {label: TaskTypes.MARKETING, value: TaskTypes.MARKETING},
    {label: TaskTypes.PROJECT, value: TaskTypes.PROJECT},
    {label: TaskTypes.EMPTY, value: TaskTypes.EMPTY},
  ];

  const getFilteredList = () => {
    if (selected?.value === TaskTypes.EMPTY) {
      setTaskList(() => state.tasks);
      return;
    }
    const filteredList = state.tasks.filter(
      (task: Task) => task.type === selected.value,
    );
    setTaskList(() => filteredList);
  };

  const goToDetails = (id: string) => {
    navigation.navigate('Details', {id});
  };

  useEffect(() => {
    getFilteredList();
  }, []);

  useEffect(() => {
    getFilteredList();
  }, [selected]);

  useEffect(() => {
    if (isFocused) {
      getFilteredList();
    }
  }, [isFocused]);

  return (
    <View>
      <View style={styles.container}>
        <Dropdown
          label="Selecciona una opcion para filtrar"
          data={data}
          onSelect={setSelected}
        />
      </View>
      {taskList.map((task: Task) => {
        return <TaskCard key={task.id} task={task} onPress={goToDetails} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
