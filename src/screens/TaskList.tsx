import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Task from '../components/Task';
import {useApp} from '../context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../components/MyButton';
import {Tasks} from '../types/types';

const TaskList = () => {
  const {tasks, addTasks} = useApp();
  const [items, setItems] = useState<Tasks>([]);
  useEffect(() => {
    AsyncStorage.getItem('tasks').then(res => {
      console.log('res --> ', res);
      if (res) {
        addTasks(JSON.parse(res));
      }
    });
  }, []);

  useEffect(() => {
    setItems(tasks);
  }, [tasks]);

  const handleRemoveAll = () => {
    AsyncStorage.removeItem('tasks');
  };

  return (
    <FlatList
      style={styles.container}
      initialNumToRender={5}
      data={items}
      renderItem={({item}) => (
        <Task
          title={item.title}
          description={item.description}
          category={item.category}
          status={item.status}
          id={item.id}
        />
      )}
      keyExtractor={item => {
        return item.id;
      }}
      ListEmptyComponent={<Text style={styles.noItems}>No items</Text>}
      ListFooterComponentStyle={styles.footerList}
      ListFooterComponent={<View />}
      ListHeaderComponent={<View style={styles.header}>
        <MyButton title="Remove all" onPress={handleRemoveAll} />
      </View>}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  noItems: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  footerList: {
    height: 60,
  },
  header: {
    alignItems: 'flex-end',
  },
});
