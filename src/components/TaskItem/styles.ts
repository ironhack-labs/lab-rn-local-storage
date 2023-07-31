import {StyleSheet} from 'react-native';

import {greyColor, lightColor} from '../../theme/global.styles';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: lightColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskInfoContainer: {
    gap: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
  },
  categoryContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: greyColor,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  category: {
    fontSize: 12,
  },
});
