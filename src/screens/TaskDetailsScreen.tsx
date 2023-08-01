import {View, Text} from 'react-native';
import {TaskT, useTask} from '../context/taskContext';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigatonT} from '../../navigation/AppNavigator';
import {Button} from '../components/Button';
import appStyles from '../styles';
import styles from '../theme/TaskDetailsScreen.styles';

type RouteParams = {
  params: {task: TaskT};
};

export const TaskDetailsScreen = () => {
  const route: RouteProp<RouteParams> = useRoute();
  const {goBack} =
    useNavigation<NativeStackNavigationProp<RootStackNavigatonT>>();
  const {updateTask, deleteTask} = useTask();
  const {id, title, description, category, completion} = route.params?.task;
  const [completed, setCompleted] = useState<boolean>(completion);

  const handleRemove = () => {
    deleteTask(id);
    goBack();
  };

  const handleChangeCompleted = (newValue: boolean) => {
    setCompleted(newValue);
    updateTask({...route.params.task, completion: newValue});
  };

  return (
    <View style={[appStyles.container, styles.container]}>
      <View>
        <Text style={styles.header}>Title</Text>
        <Text style={styles.value}>{title}</Text>
      </View>
      <View>
        <Text style={styles.header}>Category</Text>
        <Text style={styles.value}>{category}</Text>
      </View>
      <View>
        <Text style={styles.header}>Description</Text>
        <Text style={styles.value}>{description}</Text>
      </View>
      <View style={styles.completedContainer}>
        <CheckBox value={completed} onValueChange={handleChangeCompleted} />
        <Text style={styles.value}>Completed</Text>
      </View>
      <Button text="Remove task" onPress={handleRemove} />
    </View>
  );
};
