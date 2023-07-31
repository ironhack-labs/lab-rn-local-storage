import {StyleSheet} from 'react-native';

import globalStyles from '../../theme/global.styles';

export default StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  input: {
    ...globalStyles.input,
  },
  inputMultiline: {
    ...globalStyles.inputMultiline,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    ...globalStyles.label,
  },
  button: {
    ...globalStyles.button,
  },
  textButton: {
    ...globalStyles.textButton,
  },
  textDeleteButton: {
    ...globalStyles.textDeleteButton,
  },
});
