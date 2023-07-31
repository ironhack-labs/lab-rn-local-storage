import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const AddButton = ({onPress} : {onPress : () => void}) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={onPress}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        Agregar task
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: "green",
    alignItems: 'center',
    borderRadius: 10,
  },
})