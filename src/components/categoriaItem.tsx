import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CategoryItemProps {
  category: string;
  onPress: (category: string) => void;
  selectedCategory: string | null;
}

const CategoryItem = ({ category, onPress, selectedCategory }: CategoryItemProps) => {
  const isSelected = category === selectedCategory || (category === 'Mostrar todo' && !selectedCategory);
  const backgroundColor = isSelected ? '#E1E9F5' : '#7E5DE0'; 
  const titleColor = isSelected ? '#4A47A3' : 'white'; 

  return (
    <TouchableOpacity onPress={() => onPress(category)}>
      <View style={[styles.categoryItem, { backgroundColor }]}>
        <Text style={[styles.categoryTitle, { color: titleColor }]}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CategoryItem;
