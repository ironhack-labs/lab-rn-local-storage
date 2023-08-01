import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {buttonStyles} from '../theme/Button.styles';

export const AddButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
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
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 10,
  },
});
