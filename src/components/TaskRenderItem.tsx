import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Task } from '../types/Task'

export const TaskRenderItem = ({task, onPress} : {task: Task, onPress : () => void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
      borderRadius:10,
      borderWidth:1,
      borderColor:"rgba(0, 0, 0, 1)",
      paddingVertical: 19,
      paddingHorizontal:5
    }}>
      <Text>{task.title}</Text>
      <View style={{height:5}}/>
      <Text>{task.categories}</Text>
    </TouchableOpacity>
  )
}
