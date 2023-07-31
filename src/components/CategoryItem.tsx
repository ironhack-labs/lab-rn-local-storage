import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CategoryItemProps {
  category: string;
  onPress: (category: string) => void;
  selectedCategory: string | null;
}

const CategoryItem = ({ category, onPress, selectedCategory }: CategoryItemProps) => {
  const isSelected = category === selectedCategory || (category === 'Mostrar todo' && !selectedCategory);

  return (
    <TouchableOpacity onPress={() => onPress(category)}>
      <View style={[styles.categoryItem, isSelected && styles.selectedCategoryItem]}>
        <Text style={[styles.categoryTitle, isSelected && styles.selectedCategoryTitle]}>
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
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
  },
  selectedCategoryItem: {
    backgroundColor: '#3a86ff',
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  selectedCategoryTitle: {
    color: 'white',
  },
});

export default CategoryItem;
