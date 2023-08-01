import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 10,
  },
});
