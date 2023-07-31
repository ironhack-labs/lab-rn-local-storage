import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
import {Task as TTask} from '../types/types';

const TaskDetails = props => {
  const {title, description, category, status} = props.route.params;

  return (
    <View>
      <GoBackBtn />
      <View style={styles.containerDetails}>
        <Text style={styles.text}>Details</Text>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{category}</Text>
        <Text style={styles.text}>{status}</Text>
      </View>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  containerDetails: {
    marginVertical: 10,
  },
  text: {
    marginBottom: 10,
  },
});
