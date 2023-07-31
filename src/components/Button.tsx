import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {appStyles} from '../theme/App.styles';
import {ButtonProps} from '../types';

const Button = ({color, onPress, title, styles}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[appStyles.appButton, styles, {backgroundColor: color}]}>
      <Text style={appStyles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
