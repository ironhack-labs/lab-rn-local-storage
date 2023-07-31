import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
import MyButton from '../components/MyButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {NavListBase} from '../navigation/NavListBase';

type DetailsScreenProps = {
  navigation: StackNavigationProp<NavListBase, 'TaskDetails'>;
  route: RouteProp<NavListBase, 'TaskDetails'>;
};

const TaskDetails: React.FC<DetailsScreenProps> = ({route}) => {
  const {title, description, category, status} = route.params;

  return (
    <View>
      <GoBackBtn />
      <View style={styles.containerDetails}>
        <Text style={styles.text}>Details</Text>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{category}</Text>
        <Text style={styles.text}>{status}</Text>
        <View style={styles.options}>
          <MyButton title="Delete task" onPress={() => {}} />
        </View>
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
  options: {
    alignItems: 'center',
  },
});
