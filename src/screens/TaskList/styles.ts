import {StyleSheet} from 'react-native';
import globalStyles from '../../theme/global.styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  fabContent: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
