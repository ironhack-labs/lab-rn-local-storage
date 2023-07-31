import {StyleSheet} from 'react-native';

import globalStyles, {lightColor} from '../../theme/global.styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
    padding: 0,
  },
  fabContent: {
    color: lightColor,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
