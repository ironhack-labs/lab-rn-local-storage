import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Task} from '../interfaces/Task';
import {listTaskStyles} from '../theme/ListTask.styles';
import {TaskContext} from '../context/TaskContext';

export const TaskRenderItem = ({
  task,
  onPress,
  index,
}: {
  task: Task;
  onPress: () => void;
  index: string;
}) => {
  const {markAsPending} = useContext(TaskContext);

  return (
    <TouchableOpacity
      onPress={() => markAsPending(Number(index))}
      style={[
        listTaskStyles.cardContainer,
        {backgroundColor: task.status !== 'completed' ? 'gray' : 'green'},
      ]}>
      <View>
        <Text style={listTaskStyles.taskTitle}>{task.title}</Text>
        <View style={{height: 5}} />
        <Text style={listTaskStyles.taskTitle}>{task.categories}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={listTaskStyles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
