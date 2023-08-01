import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useTaskContext} from '../context/TaskContext';
import {Task} from '../../types';
import {useNavigation} from '@react-navigation/native';
import DropdownPicker from '../components/DropdownPicker';

const TaskListScreen: React.FC = () => {
  const {tasks, selectCategory, categories} = useTaskContext();
  const navigation = useNavigation();

  const [selectedCategoryLocal, setSelectedCategoryLocal] = useState<
    string | null
  >(null);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategoryLocal(category);
    selectCategory(category);
  };

  const filteredTasks = selectedCategoryLocal
    ? tasks.filter(task => task.category === selectedCategoryLocal)
    : tasks;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Tasks</Text>
      <DropdownPicker
        label="Select a Category"
        items={categories}
        selectedValue={selectedCategoryLocal}
        onValueChange={handleCategorySelect}
      />
      <FlatList
        data={filteredTasks}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.taskContainer}
            onPress={() =>
              navigation.navigate('TaskDetails', {taskId: item.id})
            }>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskCategory}>{item.category}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item: Task) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskContainer: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskCategory: {
    fontSize: 16,
    color: '#666',
  },
});

export default TaskListScreen;
