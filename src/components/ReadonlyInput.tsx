import {View, TextInput} from 'react-native';
import React from 'react';
import {inputStyles} from '../theme/Input.styles';
import {ReadonlyInputProps} from '../types';

const ReadonlyInput = ({inputProps, value}: ReadonlyInputProps) => {
  return (
    <View style={inputStyles.inputContainer}>
      <TextInput
        {...inputProps}
        editable={false}
        value={value}
        style={inputStyles.input}
      />
    </View>
  );
};

export default ReadonlyInput;
