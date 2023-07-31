import {StyleSheet} from 'react-native';

import globalStyles, {lightColor} from '../../theme/global.styles';

export default StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalTop: {
    flex: 0.5,
  },
  modalContent: {
    backgroundColor: lightColor,
    flex: 1,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 15,
  },
  button: {
    ...globalStyles.button,
  },
  textButton: {
    ...globalStyles.textButton,
  },
});
