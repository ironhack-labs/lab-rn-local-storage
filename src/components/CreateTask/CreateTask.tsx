import React, { useContext, useState } from 'react'
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { s } from './CreateTask.style'
import { TodoContext } from '../../context/TodoContext'

export const CreateTask = () => {

  const [visible, setVisible] = useState(false);
  const {createTask} = useContext(TodoContext);

  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
  })


  const handleOnChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  const handleCreateNewTask = () => {
    const newTodo = {
      id: new Date().getTime() * Math.ceil(Math.random() * 15),
      title: form.title,
      category: form.category,
      description: form.description,
      done: false
    }
    createTask(newTodo);
    setVisible(true)
  }

  return (
    <View>
      <Text>Crear tarea</Text>
        <ScrollView>
          <TextInput 
            style={s.textInput}
            placeholder='Nombre de la tarea'
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={(value) => handleOnChange(value, 'title')}
            keyboardType='default'
            keyboardAppearance='dark'
          />
          <TextInput 
            style={s.textInput}
            placeholder='Descripción de la tarea'
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={(value) => handleOnChange(value, 'description')}
            keyboardType='default'
            keyboardAppearance='dark'
          />
          <TextInput 
            style={s.textInput}
            placeholder='Categoría de la taréa'
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={(value) => handleOnChange(value, 'category')}
            keyboardType='default'
            keyboardAppearance='dark'
          />
          <TouchableOpacity 
            style={s.addTask}
            onPress={() => handleCreateNewTask()}
          >
            <Text style={s.textButtonAddTask}>Agregar tarea</Text>
          </TouchableOpacity>
          <Modal 
            animationType='fade' 
            visible={visible}
            transparent
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,.4)',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >

              <View style={{
                backgroundColor: 'white',
                width: 200,
                height: 200,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOffset: {
                  width: 0,
                  height: 20
                },
                shadowOpacity: 0.15,
                elevation: 15,
                borderRadius: 10
              }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>Se ha creado la</Text>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>tarea con éxito!</Text>
                <TouchableOpacity 
                  onPress={() => setVisible(false)}
                  style={{
                    backgroundColor: '#43B929',
                    marginTop: 10,
                    borderRadius: 10,
                    padding: 20
                  }}
                >
                  <Text style={{
                    color: 'white'
                  }}>Cerrar</Text>
                </TouchableOpacity>
              </View>

            </View>
          </Modal>
        </ScrollView>
    </View>
  )
}
