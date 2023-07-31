import {StyleSheet} from 'react-native';

import {greyColor, primaryColor} from '../../theme/global.styles';

export default StyleSheet.create({
  categoryContainer: {
    borderBottomColor: greyColor,
    borderBottomWidth: 0.4,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  categoryText: {
    textAlign: 'center',
  },
  activeCategoryText: {
    color: primaryColor,
    fontWeight: 'bold',
  },
});
