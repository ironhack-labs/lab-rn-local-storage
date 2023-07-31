import React from 'react';
import {Text, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
// import {formInputStyles} from '../theme/FormInput.styles';
import {View} from 'react-native';
import {FormInputProps} from '../types';
import {inputStyles} from '../theme/Input.styles';

function FormInput<T extends object>({
  control,
  inputProps,
  error,
  controlName,
  required,
  readonly,
}: FormInputProps<T>) {
  const _inputStyles = error
    ? [inputStyles.input, inputStyles.inputWithError]
    : [inputStyles.input];
  return (
    <View style={inputStyles.inputContainer}>
      <Controller
        control={control}
        rules={{required: required && 'This is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            {...inputProps}
            editable={!readonly}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={_inputStyles}
          />
        )}
        name={controlName}
      />
      {error && <Text style={inputStyles.errorMessage}>{error}</Text>}
    </View>
  );
}

export default FormInput;
