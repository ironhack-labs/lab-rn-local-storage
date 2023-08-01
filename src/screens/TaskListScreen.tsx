import {Button, FlatList, View} from 'react-native';
import {TaskT, useTask} from '../context/taskContext';
import {Task} from '../components/Task';
import appStyles from '../styles';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigatonT} from '../../navigation/AppNavigator';
import {FloatingButton} from '../components/FloatingButton';
import {CategoryFilterModal} from '../components/CategoryFilterModal';

export const TaskListScreen = () => {
  const {list, filters} = useTask();
  const {navigate, setOptions} =
    useNavigation<NativeStackNavigationProp<RootStackNavigatonT>>();

  const [tasks, setTasks] = useState(list);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  const renderItem = ({item}: {item: TaskT}) => <Task {...item} />;

  const toggleModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  useEffect(() => {
    setOptions({
      headerRight: () => <Button title="Filter" onPress={toggleModal} />,
    });
  }, []);

  useEffect(() => {
    if (filters.length) {
      const tasksFiltered = tasks.filter(task =>
        filters.includes(task.category),
      );

      setTasks(tasksFiltered);
    } else {
      setTasks(list);
    }
  }, [filters.length]);

  return (
    <View style={appStyles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <FloatingButton onPress={() => navigate('TaskCreation')} />
      <CategoryFilterModal
        toggleModal={toggleModal}
        isVisible={showFilterModal}
      />
    </View>
  );
};
