import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {useAppContext} from '../../hooks/useAppContext';

import styles from './styles';
import CategoryList from '../CategoryList';

const FilterModal = () => {
  const {showFilterModal, toggleFilterModal, setActiveCategory} =
    useAppContext();

  const handleClearFilter = () => setActiveCategory(null);

  return (
    <>
      {showFilterModal && <View style={styles.overlay} />}
      <Modal animationType="slide" visible={showFilterModal} transparent>
        <TouchableWithoutFeedback onPress={toggleFilterModal}>
          <View style={styles.modalTop} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Categorías</Text>
            <CategoryList />
            <TouchableOpacity onPress={handleClearFilter}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Limpiar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FilterModal;
