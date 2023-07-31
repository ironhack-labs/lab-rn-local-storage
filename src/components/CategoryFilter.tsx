import React, {useMemo} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {categoryFilterStyles} from '../theme/CategoryFilter.styles';
import {useTasksContext} from '../hooks';

const CategoryFilter = () => {
  const {tasks, setCategoryFilter, category} = useTasksContext();
  const categories = useMemo(
    () => [...new Set(tasks.map(x => x.category))],
    [tasks],
  );
  return (
    <Dropdown
      data={[
        {label: 'All categories', value: ''},
        ...categories.map(_category => ({label: _category, value: _category})),
      ]}
      style={categoryFilterStyles.input}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select category"
      value={category}
      onChange={({value}) => {
        setCategoryFilter(value);
      }}
    />
  );
};

export default CategoryFilter;
