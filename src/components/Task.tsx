import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Task as TTask} from '../types/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavListBase} from '../navigation/NavListBase';

const Task: React.FC<TTask> = ({title, description, category, status, id}) => {
  const {navigate} = useNavigation<NavigationProp<NavListBase>>();

  const [data, setData] = useState<TTask>({
    title: '',
    description: '',
    category: 'uncategorized',
    status: false,
    id: 0,
  });

  useEffect(() => {
    setData({
      title,
      description,
      category,
      status,
      id,
    });
  }, [category, description, status, title, id]);

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
        <View style={styles.row}>
          <Text style={styles.label}>Title: </Text>
          <Text style={styles.text}>{title}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Desc: </Text>
          <Text style={styles.text}>{shortText(description, 50)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Category: </Text>
          <Text style={styles.text}>{category}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Status: </Text>
          <Text style={[styles.text, {color: status ? 'green' : 'black'}]}>
            {status ? 'Completed' : 'Pending'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 10,
  },
  text: {
    marginBottom: 10,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    width: 80,
  },
});
