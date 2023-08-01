import React, { useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { TodoContext } from '../../context/TodoContext'
import Icon from 'react-native-vector-icons/Ionicons';
import { s } from './CardTodo.styles';

export const CartTodo = () => {
  const {todoState} = useContext(TodoContext);
  console.log(todoState)
  
  return (
    <ScrollView>
    {
      todoState.map(todo => (
        <TouchableOpacity 
          style={s.card} 
          key={todo.id}
        >
          <Text 
            style={[s.description, 
              todo.done && {textDecorationLine: 'line-through'}]}
          >{todo.title}</Text>
          {
          todo.done && 
          <Icon 
            name="checkmark-circle-outline" 
            size={30} 
            color={'#3FEB82'}
          />
          }
        </TouchableOpacity>
      ))
    }
    </ScrollView>
  )
}
