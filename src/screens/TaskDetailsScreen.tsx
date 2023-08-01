import {View, Text, Button} from 'react-native';
import {TaskT, useTask} from '../context/taskContext';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigatonT} from '../../navigation/AppNavigator';

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
    <View>
      <Text>{title}</Text>
      <Text>{category}</Text>
      <Text>{description}</Text>
      <CheckBox value={completed} onValueChange={handleChangeCompleted} />
      <Button title="Remove task" onPress={handleRemove} />
    </View>
  );
};
