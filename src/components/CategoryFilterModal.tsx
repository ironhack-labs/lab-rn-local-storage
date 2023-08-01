import {Button, FlatList, Modal, View} from 'react-native';
import {useTask} from '../context/taskContext';
import styles from '../theme/CategoryModal.styles';
import {useState} from 'react';
import {CategoryFilterItem} from './CategoryFilterItem';

type PropsT = {
  isVisible: boolean;
  toggleModal: () => void;
};

export const CategoryFilterModal = (props: PropsT) => {
  const {categories, updateFilters} = useTask();
  const [filter, setFilter] = useState<string[]>([]);

  const handleSubmit = () => {
    updateFilters(filter);
    props.toggleModal();
  };

  const handleClear = () => {
    updateFilters([]);
    props.toggleModal();
  };

  const renderItem = ({item}: {item: string}) => {
    return (
      <CategoryFilterItem
        filters={filter}
        category={item}
        updateFilter={setFilter}
      />
    );
  };

  return (
    <Modal
      animationType="slide"
      visible={props.isVisible}
      onRequestClose={props.toggleModal}>
      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
          />
          <Button title="Clear" onPress={handleClear} />
          <Button title="Apply" onPress={handleSubmit} />
          <Button title="Close" onPress={props.toggleModal} />
        </View>
      </View>
    </Modal>
  );
};
