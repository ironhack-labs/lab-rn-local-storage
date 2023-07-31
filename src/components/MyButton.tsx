import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MyButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text>{props.title}</Text>
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
