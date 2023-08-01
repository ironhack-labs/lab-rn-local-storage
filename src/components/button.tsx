import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
}

function Button({ text, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    height: 45,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FCFCFC',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Button;
