import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { HomeProps } from '../navigation/types';
import { Task, Category } from '../types';
import { useTaskList } from '../hooks';

export default function HomeScreen({ navigation }: HomeProps) {
  const [category, setCategory] = useState<Category>('ALL');
  const { categories, filterTaskListByCategory } = useTaskList();
  const taskList = filterTaskListByCategory(category);

  const renderItem: ListRenderItem<Task> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('TaskDetail', { id: item.id })}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <SelectDropdown
        data={categories}
        defaultValue={'ALL'}
        onSelect={(selectedItem, index) => {
          setCategory(selectedItem);
        }}
      />

      <Button
        title="Create New"
        onPress={() => navigation.navigate('TaskCreation')}
      />
      <FlatList
        data={taskList}
        keyExtractor={task => task.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
});
