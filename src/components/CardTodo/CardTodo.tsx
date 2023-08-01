import React, { useContext, useState } from 'react'
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { TodoContext } from '../../context/TodoContext'
import Icon from 'react-native-vector-icons/Ionicons';
import { s } from './CardTodo.styles';

export const CardTodo = ({detail, onDeleteTask, onCompleteTask}: {detail?: boolean, onDeleteTask?: (id: number) => void, onCompleteTask?: (id: number) => void}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const {todoState, filterTask, allTasks} = useContext(TodoContext);
  
  const filteredCategoriesDuplicated = new Set(todoState.map(todo => (todo.category)))

  const filteredCategories = Array.from(filteredCategoriesDuplicated);
  
  return (
    <>
      <View style={s.comboFilter}>
      <Text style={s.toggleFilter}>Activar filtro</Text>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
      }}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {
        isEnabled && (
          <>
            <Text style={s.filterTitle}>Filtrar por</Text>
            {
              filteredCategories.map(category => (
                <TouchableOpacity 
                  key={category}
                  style={s.filterButton}
                  onPress={() => filterTask(category)}
                >
                  <Text style={s.colorFilterBy}>{category}</Text>
                </TouchableOpacity>
              ))
            }
            <TouchableOpacity style={s.filterButton} onPress={allTasks}>
              <Text style={s.colorFilterBy}>Todas las tareas</Text>
            </TouchableOpacity>
          </>
        )
      }
      </View>
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
    </>
  )
}
