import {StyleSheet} from 'react-native';

export const inputStyles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#f1f1f1',
    height: 45,
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
  },
  inputWithError: {
    borderColor: 'red',
  },
  errorMessage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },
});
