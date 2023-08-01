import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigatonT} from '../../navigation/AppNavigator';
import {TaskT} from '../context/taskContext';
import styles from '../theme/Task.styles';

export const Task = (props: TaskT) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackNavigatonT>>();

  return (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => navigate('TaskDetails', {task: props})}>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
    </TouchableOpacity>
  );
};
