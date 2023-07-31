import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { s } from './Header.styles'

export const Header = () => {
  return (
    <View style={s.headerContainer}>
      {/* <Image 
      style={s.img}
      resizeMode='contain'
      source={{
        uri: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-drawn-cartoon-list-pencil-illustration-png-image_5357514.jpg'
      }}/> */}
      <Icon name="list-outline" size={30} style={s.icon}/>
      <Text style={s.subtitle}>Come and get it!</Text>
    </View>
  )
}
