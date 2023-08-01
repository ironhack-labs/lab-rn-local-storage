import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Form from '../components/Form';

const TaskCreation = () => {
  return (
    <View>
      <Text style={styles.title}>Details of the new task</Text>
      <Form />
    </View>
  );
};

export default TaskCreation;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
  },
});
