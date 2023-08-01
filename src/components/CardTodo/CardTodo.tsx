import React, { useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { TodoContext } from '../../context/TodoContext'
import Icon from 'react-native-vector-icons/Ionicons';
import { s } from './CardTodo.styles';

export const CardTodo = ({detail, onDeleteTask, onCompleteTask}: {detail?: boolean, onDeleteTask?: (id: number) => void, onCompleteTask?: (id: number) => void}) => {
  const {todoState} = useContext(TodoContext);
  return (
    <ScrollView>
    {
      todoState.map(todo => (
        <TouchableOpacity 
          style={[s.card, detail && {flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 350}]} 
          key={todo.id}
        >
          {detail && <Text style={s.title}> - Tarea - </Text>}
          <Text 
            style={[s.description, 
              todo.done && {textDecorationLine: 'line-through'}]}
          >
            {todo.title}
          </Text>
          {
            detail && 
            <View style={s.taskDetail}>
              <Text style={s.title}> - Categoría - </Text>
              <Text style={s.description}>{todo.category}</Text>
              <Text style={s.title}> - Descripción - </Text>
              <View style={s.descripcionSpace}>
                <Text style={s.description}>{todo.description}</Text>
              </View>
              <View style={s.actionButtons}>
                <TouchableOpacity 
                  style={[s.buttonBox, {backgroundColor: '#C81D25'}]}
                  onPress={() => onDeleteTask!(todo.id)}
                  >
                  <Text style={s.taskTitleAction}>Eliminar tarea</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={[s.buttonBox, {backgroundColor: '#7CB518'}]}
                onPress={() => onCompleteTask!(todo.id)}>
                  <Text style={[s.taskTitleAction, ]}>Completar Tarea</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
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
