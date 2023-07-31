import {StyleSheet} from 'react-native';

export const lightColor = '#fff';
export const primaryColor = '#007aff';
export const greyColor = '#e3e3e3';
export const dangerColor = '#ff675e';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColor,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    paddingVertical: 15,
    borderBottomWidth: 0.4,
    borderBottomColor: greyColor,
    marginBottom: 20,
  },
  inputMultiline: {
    marginTop: 10,
    paddingVertical: 15,
    borderBottomWidth: 0.4,
    borderColor: greyColor,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  textDeleteButton: {
    color: dangerColor,
    fontWeight: 'bold',
  },
});
