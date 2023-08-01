import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { s } from './Header.styles'

export const Header = () => {
  return (
    <View style={s.headerContainer}>
      <Icon name="list-outline" size={30} style={s.icon}/>
      <Text style={s.subtitle}>Todo APP!</Text>
    </View>
  )
}
