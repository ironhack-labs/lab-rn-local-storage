import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
  },
  controllerContainer: {},
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 40,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
  },
});

export default styles;
