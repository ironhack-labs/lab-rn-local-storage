import React, {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import CustomScreenContainer from '../components/CustomScreenContainer';
import TaskItem from '../components/TaskItem';
import {useTodos} from '../hooks/useTodos';
import {STORAGE_KEYS, getFromStorage} from '../utils';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeNavigatorProps} from '../navigation/HomeNavigator';
import {SCREENS} from '../navigation';

type TaskListScreenProps = StackScreenProps<HomeNavigatorProps, 'task-list'>;

const TaskListScreen = ({navigation: {navigate}}: TaskListScreenProps) => {
  const {todos, setTodos} = useTodos();

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await getFromStorage(STORAGE_KEYS.TODO_LIST);
      if (todos) {
        setTodos(todos);
      }
    };
    loadTodos();
  }, []);
  return (
    <CustomScreenContainer>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({item, index}) => {
          return (
            <TaskItem
              todo={item}
              onPress={() => navigate(SCREENS.TASK_DETAILS, {taskIndex: index})}
            />
          );
        }}
      />
    </CustomScreenContainer>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({});
