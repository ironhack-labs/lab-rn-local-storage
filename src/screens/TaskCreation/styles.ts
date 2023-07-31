import {StyleSheet} from 'react-native';

import globalStyles, {
  greyColor,
  lightColor,
  primaryColor,
} from '../../theme/global.styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  button: {
    backgroundColor: primaryColor,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 15,
    borderBottomWidth: 0.4,
    borderBottomColor: greyColor,
    marginBottom: 20,
  },
  textButton: {
    color: lightColor,
    fontWeight: 'bold',
  },
});
