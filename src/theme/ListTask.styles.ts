import {StyleSheet} from 'react-native';

export const listTaskStyles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '700',
  },

  cardContainer: {
    backgroundColor: 'gray',
    padding: 4,
    marginTop: 15,
    borderRadius: 8,
    height: 80,
    paddingHorizontal: 12,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  taskTitle: {
    fontSize: 20,
    marginBottom: 2,
  },

  edit: {
    fontSize: 14,
    flexDirection: 'column',
    textAlign: 'center',
  },
});
