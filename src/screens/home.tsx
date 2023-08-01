import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import { Button, Dropdown } from '../components';
import { HomeProps } from '../navigation/types';
import { Task, Category } from '../types';
import { useTaskList } from '../hooks';

export default function HomeScreen({ navigation }: HomeProps) {
  const [category, setCategory] = useState<Category>('ALL');
  const { categories, filterTaskListByCategory } = useTaskList();
  const taskList = filterTaskListByCategory(category);

  const renderItem: ListRenderItem<Task> = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.taskContainer}
          onPress={() => navigation.navigate('TaskDetail', { id: item.id })}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.listContainer}>
          <View style={styles.dropdownContainer}>
            <Dropdown
              data={categories}
              defaultValue={'ALL'}
              onSelect={(selectedItem, index) => {
                setCategory(selectedItem);
              }}
            />
          </View>

          <FlatList
            data={taskList}
            keyExtractor={task => task.id}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.actions}>
          <View style={styles.buttonContainer}>
            <Button
              text="Create New"
              onPress={() => navigation.navigate('TaskCreation')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    height: 45,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    color: '#666',
    paddingLeft: 10,
    flex: 1,
  },
  category: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    width: 80,
  },

  container: {
    paddingHorizontal: 20,
    paddingBottom: 0,
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 100,
  },
  buttonContainer: {
    width: 150,
  },
});
