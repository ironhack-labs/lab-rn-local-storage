import {StyleSheet} from 'react-native';

import {primaryColor} from '../../theme/global.styles';

export default StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: primaryColor,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
