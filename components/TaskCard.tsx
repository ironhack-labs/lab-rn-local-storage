import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Task} from '../types/types';

interface ICardProps {
  task: Task;
  onPress: (id: string) => void;
}

export const TaskCard = ({task, onPress}: ICardProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(task.id)}>
      <View style={styles.container}>
        <Text>{task.name}</Text>
        <Text>{task.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
