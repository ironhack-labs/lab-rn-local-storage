import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CategoryItemProps {
  category: string;
}

const CategoryTaskItem = ({ category }: CategoryItemProps) => (
  <View style={styles.categoryItem}>
    <Text style={styles.categoryTitle}>{category}</Text>
  </View>
);

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#E1E9F5',  
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#7E5DE0',  
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4A47A3', 
  },
});

export default CategoryTaskItem;
