import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface CategoryItemProps {
  category: string;
}

const CategoryTaskItem = ({category}: CategoryItemProps) => {
  return (
    <View style={[styles.categoryItem]}>
      <Text style={[styles.categoryTitle]}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#00000025',
    alignSelf: 'flex-start',
    marginTop: 9
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black'
  },
  selectedCategoryTitle: {
    color: 'white',
  },
});

export default CategoryTaskItem;
