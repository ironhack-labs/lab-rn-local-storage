import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Task as TTask} from '../types/types';

const Task: React.FC<TTask> = ({title, description, category, status}) => {
  const shortText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    }
    return text;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{shortText(description, 50)}</Text>
      <Text style={styles.text}>{category}</Text>
      <Text style={styles.text}>{status ? 'Completed' : 'Pending'}</Text>
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
