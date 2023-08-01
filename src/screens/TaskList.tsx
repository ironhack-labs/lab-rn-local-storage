import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Task from '../components/Task';
import {useApp} from '../context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Tasks} from '../types/types';

const Header = () => {
  const {filterTasks} = useApp();
  return (
    <View style={styles.header}>
      <Text>Filter:</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => filterTasks('uncategorized')}>
          <View style={styles.catItem}>
            <Text style={styles.catItemText}>uncategorized</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterTasks('school')}>
          <View style={styles.catItem}>
            <Text style={styles.catItemText}>school</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterTasks('work')}>
          <View style={styles.catItem}>
            <Text style={styles.catItemText}>work</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterTasks('home')}>
          <View style={styles.catItem}>
            <Text style={styles.catItemText}>home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TaskList = () => {
  const {tasks, addTasks} = useApp();
  const [items, setItems] = useState<Tasks>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    if (loaded) {
      return;
    }
    AsyncStorage.getItem('tasks').then(res => {
      if (res) {
        addTasks(JSON.parse(res));
      }
    });
  }, [addTasks, loaded]);

  useEffect(() => {
    setItems(tasks);
  }, [tasks]);

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
      ListHeaderComponent={<Header />}
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
    alignItems: 'stretch',
  },
  catItem: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  catItemText: {
    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
});
