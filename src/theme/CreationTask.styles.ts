import {StyleSheet} from 'react-native';

export const creationTaskStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  input: {
    backgroundColor: 'gray',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 15,
    paddingHorizontal: 6,
    textAlign: 'center',
  },
});
