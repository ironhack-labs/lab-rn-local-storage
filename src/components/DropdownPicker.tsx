import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

interface DropdownPickerProps {
  label: string;
  items: string[];
  selectedValue: string | null;
  onValueChange: (value: string | null) => void;
}

const DropdownPicker: React.FC<DropdownPickerProps> = ({
  label,
  items,
  selectedValue,
  onValueChange,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleValueSelect = (value: string | null) => {
    onValueChange(value);
    setDropdownOpen(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableWithoutFeedback
        onPress={() => setDropdownOpen(!isDropdownOpen)}>
        <View>
          <Text>{selectedValue || label}</Text>
        </View>
      </TouchableWithoutFeedback>
      {isDropdownOpen && (
        <View style={styles.dropdown}>
          {items.map(item => (
            <TouchableOpacity
              key={item}
              style={styles.dropdownItem}
              onPress={() => handleValueSelect(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    height: 40,
    marginBottom: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    position: 'relative',
    zIndex: 1,
  },
  dropdown: {
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
  },
  dropdownItem: {
    padding: 10,
  },
});

export default DropdownPicker;
