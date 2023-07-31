import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useAppContext} from '../../hooks/useAppContext';

import styles from './styles';

type CategoryItemProps = {
  category: string;
};

const CategoryItem = ({category}: CategoryItemProps) => {
  const {activeCategory, setActiveCategory} = useAppContext();

  const handleSetActiveCategory = () => setActiveCategory(category);

  return (
    <TouchableOpacity onPress={handleSetActiveCategory}>
      <View style={styles.categoryContainer}>
        <Text
          style={{
            ...styles.categoryText,
            ...(activeCategory === category ? styles.activeCategoryText : {}),
          }}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
