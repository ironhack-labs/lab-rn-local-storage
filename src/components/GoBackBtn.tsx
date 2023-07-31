import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GoBackBtn = () => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity onPress={goBack}>
      <View style={styles.container}>
        <Text>Back</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoBackBtn;

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
