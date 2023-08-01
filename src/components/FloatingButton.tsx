import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../theme/FloatingButton';

export const FloatingButton = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <Text style={styles.iconText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
