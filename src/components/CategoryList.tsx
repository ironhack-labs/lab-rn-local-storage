import React from 'react';
import { FlatList, View } from 'react-native';
import CategoryItem from './CategoryItem';

interface CategoryListProps {
  categories: string[];
  selectedCategory: string | null;
  onPressCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, selectedCategory, onPressCategory }) => {
  const renderCategoryItem = ({ item }: { item: string }) => (
    <CategoryItem category={item} onPress={onPressCategory} selectedCategory={selectedCategory} />
  );

  return (
    <View style={{paddingVertical: 15}}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
        horizontal
      />
    </View>
  );
};

export default CategoryList;
