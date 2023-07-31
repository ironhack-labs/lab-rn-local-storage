import {StyleSheet} from 'react-native';

import globalStyles, {
  lightColor,
  primaryColor,
} from '../../theme/global.styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
    padding: 0,
  },
  emptyList: {
    textAlign: 'center',
  },
  filterByCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  filterByCategoryText: {
    fontSize: 12,
    color: primaryColor,
  },
  fabContent: {
    color: lightColor,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
