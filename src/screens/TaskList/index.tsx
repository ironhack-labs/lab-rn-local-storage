import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import type {NativeStackParamList} from '../../types/Stack.type';

import {
  FilterModal,
  FloatingActionButton,
  TaskFlatList,
} from '../../components';

import {TASK_CREATION, TASK_LIST} from '../../constants/screens';

import {useAppContext} from '../../hooks/useAppContext';

import styles from './styles';

type TaskListProps = NativeStackScreenProps<
  NativeStackParamList,
  typeof TASK_LIST
>;

const TaskList = ({navigation}: TaskListProps) => {
  const {tasks, toggleFilterModal} = useAppContext();

  const handleGoToCreation = () => navigation.navigate(TASK_CREATION);

  const handleFilterByCategory = () => toggleFilterModal();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleFilterByCategory}>
        <View style={styles.filterByCategoryContainer}>
          <Text style={styles.filterByCategoryText}>Filtrar por categoría</Text>
        </View>
      </TouchableOpacity>
      {tasks.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.emptyList}>No tasks</Text>
        </View>
      ) : (
        <TaskFlatList tasks={tasks} />
      )}
      <FloatingActionButton action={handleGoToCreation}>
        <Text style={styles.fabContent}>+</Text>
      </FloatingActionButton>
      <FilterModal />
    </SafeAreaView>
  );
};

export default TaskList;
