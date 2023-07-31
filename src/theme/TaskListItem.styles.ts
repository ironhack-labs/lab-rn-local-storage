import {StyleSheet} from 'react-native';

export const taskListItemStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
  },
  statusContainer: {
    width: '25%',
    borderRadius: 100,
    marginTop: 10,
  },
  statusText: {
    color: 'white',
    textAlign: 'center',
  },
});
