import { View, StyleSheet } from 'react-native';
import SelectDropdown, {
  SelectDropdownProps,
} from 'react-native-select-dropdown';

export default function Dropdown({ data, onSelect }: SelectDropdownProps) {
  return (
    <View
      style={{
        alignItems: 'flex-end',
        marginTop: 20,
        marginBottom: 10,
      }}>
      <SelectDropdown
        buttonStyle={styles.container}
        buttonTextStyle={styles.buttonText}
        data={data}
        defaultValue={'ALL'}
        onSelect={onSelect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#666',
    borderWidth: 1,
  },
  buttonText: {
    color: '#666',
    fontSize: 12,
  },
});
