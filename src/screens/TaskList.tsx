import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Task from '../components/Task';
import {useApp} from '../context/Context';

const TaskList = () => {
  const {tasks} = useApp();

  return (
    <FlatList
      style={styles.container}
      initialNumToRender={5}
      data={tasks}
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
});
