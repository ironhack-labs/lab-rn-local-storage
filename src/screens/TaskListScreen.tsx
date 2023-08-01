import React, {useContext, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View, StatusBar} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {TaskRenderItem} from '../components/TaskRenderItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import {globalStyles} from '../theme/Global.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskList'>;

export const TaskListScreen = ({navigation}: Props) => {
  const {TaskState} = useContext(TaskContext);

  useEffect(() => {
    const auxCategories: Array<string> = [];
    TaskState.items.forEach(element => {
      if (auxCategories.indexOf(element.categories) === -1) {
        auxCategories.push(element.categories);
      }
    });
  }, [TaskState.items]);

  return (
    <SafeAreaView style={globalStyles.container}>
      <>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor="#772ea2"
        />
        <View style={{flex: 6}}>
          {TaskState.items.length === 0 ? (
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 24,
                marginTop: 15,
              }}>
              No data yet
            </Text>
          ) : (
            <FlatList
              data={TaskState.items}
              renderItem={({item, index}) => (
                <TaskRenderItem
                  task={item}
                  index={index}
                  onPress={() =>
                    navigation.navigate('TaskDetails', {
                      task: item,
                      index: index,
                    })
                  }
                />
              )}
            />
          )}
        </View>
      </>
    </SafeAreaView>
  );
};
