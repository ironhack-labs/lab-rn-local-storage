import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {TaskRenderItem} from '../components/TaskRenderItem';
import {AddButton} from '../components/AddButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskList'>;

export const TaskListScreen = ({route, navigation}: Props) => {
  const {TaskState} = useContext(TaskContext);
  const [categories, setcategories] = useState<Array<string>>([]);
  const [selectedCategory, setselectedCategory] = useState('');

  useEffect(() => {
    const auxCategories: Array<string> = [];
    TaskState.items.forEach(element => {
      if (auxCategories.indexOf(element.categories) === -1) {
        auxCategories.push(element.categories);
      }
    });
    setcategories(auxCategories);
  }, [TaskState.items]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView horizontal={true}>
          <TouchableOpacity
            style={[styles.categoryButton, selectedCategory === "" ? styles.selectedButton : {}]}
            onPress={() => setselectedCategory('')}>
            <Text>All</Text>
          </TouchableOpacity>
          {categories.map((item, index) => (
            <TouchableOpacity
            style={[styles.categoryButton, selectedCategory === item ? styles.selectedButton : {}]}
              onPress={() => setselectedCategory(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{flex: 6}}>
        <FlatList
          data={
            selectedCategory === ''
              ? TaskState.items
              : TaskState.items.filter(
                  (item, i) => item.categories === selectedCategory,
                )
          }
          renderItem={({item, index}) => (
            <TaskRenderItem
              task={item}
              onPress={() =>
                navigation.navigate('TaskDetails', {task: item, index: index})
              }
            />
          )}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          alignItems: 'center',
        }}>
        <AddButton onPress={() => navigation.navigate('TaskCreation')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedButton : {
    backgroundColor:"green"
  }
});
