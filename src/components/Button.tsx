import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {appStyles} from '../theme/App.styles';

type ButtonProps = {
  color: string;
  title: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
};
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
