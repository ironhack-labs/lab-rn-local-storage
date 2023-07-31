import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Task as TTask} from '../types/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavListBase} from '../navigation/NavListBase';

const Task: React.FC<TTask> = ({title, description, category, status}) => {
  const {navigate} = useNavigation<NavigationProp<NavListBase>>();

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      title,
      description,
      category,
      status,
    });
  }, [category, description, status, title]);

  const shortText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    }
    return text;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          return navigate('TaskDetails', data);
        }}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{shortText(description, 50)}</Text>
        <Text style={styles.text}>{category}</Text>
        <Text style={styles.text}>{status ? 'Completed' : 'Pending'}</Text>
      </TouchableOpacity>
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
