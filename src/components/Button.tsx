import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from '../theme/Button.styles';

type PropsT = {
  text: string;
  buttonStyles?: ViewStyle;
  onPress: () => void;
};

export const Button = (props: PropsT) => {
  const {text, onPress, buttonStyles} = props;

  return (
    <TouchableOpacity
      style={[styles.container, buttonStyles]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
