import {Text, TouchableOpacity} from 'react-native';
import styles from '../theme/Button.styles';

type PropsT = {
  text: string;
  onPress: () => void;
};

export const Button = (props: PropsT) => {
  const {text, onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
