// screens/TaskListScreen.tsx
import React, {useContext, useState} from 'react';
import {View, Text, FlatList, Button, Modal, TextInput} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {Task} from '../types/Task';
import TaskItem from '../components/TaskItem';

const TaskListScreen = ({navigation}) => {
  const {state} = useContext(TaskContext);
  const {tasks} = state;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');

  const filteredTasks = tasks.filter(
    task =>
      task.category.includes(selectedCategory) &&
      task.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const [showModal, setShowModal] = useState(false);

  const renderItem = ({item}) => (
    <TaskItem
      task={item}
      onPress={() => navigation.navigate('TaskDetails', {taskId: item.id})}
    />
  );

  const handleFilterByCategory = () => {
    setShowModal(false);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Filter by Category" onPress={() => setShowModal(true)} />
      <Modal visible={showModal} animationType="slide">
        <View>
          <Text>Select Category</Text>
          <TextInput
            value={selectedCategory}
            onChangeText={setSelectedCategory}
            placeholder="Enter category name"
          />
          <Button title="Apply Filter" onPress={handleFilterByCategory} />
        </View>
      </Modal>
      <TextInput
        placeholder="Search tasks"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button
        title="Add New Task"
        onPress={() => navigation.navigate('TaskCreation')}
      />
    </View>
  );
};

export default TaskListScreen;
