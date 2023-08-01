import {StyleSheet} from 'react-native';

export const taskDetailsStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginTop: 15,
  },

  subtitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
  },

  basicSprite: {
    width: 100,
    height: 100,
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 8,
  },
});
