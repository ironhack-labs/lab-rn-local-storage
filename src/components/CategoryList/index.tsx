import React from 'react';
import {FlatList} from 'react-native';

import {useAppContext} from '../../hooks/useAppContext';

import CategoryItem from '../CategoryItem';

const CategoryList = () => {
  const {getCategories} = useAppContext();

  return (
    <FlatList
      data={getCategories()}
      renderItem={({item}) => <CategoryItem key={item} category={item} />}
      keyExtractor={item => item}
    />
  );
};

export default CategoryList;
