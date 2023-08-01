import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 24,
  },
  buttonsContainer: {
    width: '60%',
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {},
  item: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 24,
  },
});

export default styles;
