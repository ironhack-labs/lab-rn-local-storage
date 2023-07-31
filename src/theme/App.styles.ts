import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(21, 26, 48)',
    padding: 15,
  },
  appButton: {
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  goBackButton: {
    borderRadius: 1000,
    backgroundColor: '#03DAC590',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
