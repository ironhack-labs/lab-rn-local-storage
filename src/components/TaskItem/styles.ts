import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
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
  categoryContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  category: {
    fontSize: 12,
  },
});
