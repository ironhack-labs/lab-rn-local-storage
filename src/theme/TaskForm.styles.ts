import {StyleSheet} from 'react-native';

export const taskFormStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginVertical: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  actionButton: {
    flex: 1,
  },
  removeButton: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    marginTop: 20,
  },
});
