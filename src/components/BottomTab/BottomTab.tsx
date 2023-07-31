import React, {FC, useContext} from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import { s } from './BottomTab.styles'
import { TodoContext } from '../../context/TodoContext';

interface BottomTabsProps {
  activeTabOption: string;
  onPress: (typeTab: string) => void;
}

export const BottomTab:FC<BottomTabsProps> = ({activeTabOption, onPress}) => {


  const {todoState} = useContext(TodoContext);

  const handleActiveOption = (selectedOption: string): StyleProp<TextStyle> => {
    return {
      fontWeight: "bold",
      color: activeTabOption === selectedOption ? 'purple' : 'black'
    }
  }

  return (
    <View style={s.root}>
      <TouchableOpacity onPress={() => onPress("todoTasks")}>
        <Text style={handleActiveOption("todoTasks")}>Task List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("createTask")}>
        <Text style={handleActiveOption('createTask')}>Create Task</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("taskDetail")}>
        <Text style={handleActiveOption('taskDetail')}>Task Detail</Text>
      </TouchableOpacity>
    </View>
  )
}
