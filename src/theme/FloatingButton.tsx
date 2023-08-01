import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    right: 20,
    bottom: 20,
    position: 'absolute',
  },
  icon: {
    width: 56,
    height: 56,
    elevation: 8,
    shadowRadius: 3,
    borderRadius: 28,
    shadowOpacity: 0.3,
    alignItems: 'center',
    shadowColor: '#000',
    justifyContent: 'center',
    backgroundColor: 'black',
    shadowOffset: {width: 0, height: 2},
  },
  iconText: {
    fontSize: 24,
    color: 'white',
  },
});

export default styles;
