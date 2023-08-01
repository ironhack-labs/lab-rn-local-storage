import {StyleSheet} from 'react-native';
import colors from './theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  text: {
    color: 'white',
  },
});

export default styles;
