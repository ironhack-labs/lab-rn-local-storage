import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CategoryItem from './categoriaItem';

interface CategoryListProps {
  categories: string[];
  selectedCategory: string | null;
  onPressCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, selectedCategory, onPressCategory }) => (
  <View style={styles.container}>
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem category={item} onPress={onPressCategory} selectedCategory={selectedCategory} />
      )}
      keyExtractor={item => item}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#7E5DE0', // Color de borde morado claro
    backgroundColor: '#E1E9F5', // Color de fondo azul claro
  },
});

export default CategoryList;
