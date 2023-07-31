import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Task as TTask} from '../types/types';

const Task = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data.title}</Text>
      <Text style={styles.text}>{props.data.description}</Text>
      <Text style={styles.text}>{props.data.category}</Text>
      <Text style={styles.text}>
        {props.data.status ? 'Completed' : 'Pending'}
      </Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  text: {
    marginBottom: 10,
  },
});
