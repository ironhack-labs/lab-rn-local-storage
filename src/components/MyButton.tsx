import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BtnType} from '../types/types';

const MyButton: React.FC<BtnType> = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
});
