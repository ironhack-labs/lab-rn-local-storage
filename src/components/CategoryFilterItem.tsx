import CheckBox from '@react-native-community/checkbox';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useTask} from '../context/taskContext';
import styles from '../theme/CategoryModal.styles';

type PropsT = {
  category: string;
  filters: string[];
  updateFilter: (filters: string[]) => void;
};

export const CategoryFilterItem = (props: PropsT) => {
  const {category, updateFilter, filters} = props;
  const {categories} = useTask();
  const [checked, setChecked] = useState<boolean>(
    !!filters.find(category => category === props.category),
  );

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (checked) {
      updateFilter([...filters, category]);
    } else {
      updateFilter(filters.filter(cat => cat !== category));
    }
  }, [checked]);

  return (
    <View style={styles.item}>
      <CheckBox
        value={checked}
        boxType="square"
        onAnimationType="fill"
        onChange={handleChange}
        animationDuration={0}
      />
      <Text style={styles.itemText}>{category}</Text>
    </View>
  );
};
