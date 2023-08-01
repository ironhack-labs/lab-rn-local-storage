import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Button,
  IndexPath,
  List,
  ListItem,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import React, { useContext, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/Navigation';
import TasksActions from '../services/Actions';
import { categories } from '../services/Constants';
import { TasksContext, TasksDispatchContext } from '../services/Store';
import { ITaskItem } from '../services/interface';

const renderItemAccessory = (task: ITaskItem): React.ReactElement => {
  const dispatch = useContext(TasksDispatchContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const remove = () => {
    dispatch(TasksActions.REMOVE_TASK(task));
  };

  return (
    <>
      <Button onPress={remove} size="tiny" style={{marginRight: 10}}>
        Eliminar
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Detail', task);
        }}
        size="tiny">
        Ver
      </Button>
    </>
  );
};

const TaskList = () => {
  const dispatch = useContext(TasksDispatchContext);

  const {tasks} = useContext(TasksContext);

  const [selectedCategory, setSelectedCategory] = React.useState<
    IndexPath | undefined
  >(undefined);

  const categoryValue = useMemo(() => {
    if (!selectedCategory) return '';
    console.log(categoryValue);

    return categories[selectedCategory.row];
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedCategory) return;

    dispatch(TasksActions.SET_SELECTED_CATEGORY(categoryValue));
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Lista de tareas</Text>
      <View style={styles.filter}>
        <Select
          onSelect={(index: any) => {
            setSelectedCategory(index);
          }}
          style={styles.margin}
          placeholder={'Escoge una categoria'}
          selectedIndex={selectedCategory}
          value={selectedCategory ? categoryValue : undefined}>
          {categories.map(category => (
            <SelectItem key={category} title={category} />
          ))}
        </Select>
        {selectedCategory && (
          <Button
            style={styles.margin}
            onPress={() => setSelectedCategory(undefined)}>
            Limpiar
          </Button>
        )}
      </View>
      <List
        style={styles.container}
        data={
          selectedCategory
            ? tasks.filter(task => task.category === categoryValue)
            : tasks
        }
        renderItem={({
          item,
        }: {
          item: ITaskItem;
          index: number;
        }): React.ReactElement => (
          <ListItem
            key={item.id}
            title={`${item.id} ${item.title} | ${item.status}`}
            description={`${item.description} ${item.category}`}
            accessoryRight={() => renderItemAccessory(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlePage: {
    color: '#ffffff',
    fontSize: 24,
    padding: 10,
  },
  margin: {
    marginBottom: 10,
  },
  filter: {
    padding: 10,
  },
});

export default TaskList;
