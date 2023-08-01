import {Modal, TextInput, View} from 'react-native';
import {useTask} from '../context/taskContext';
import styles from '../theme/CategoryModal.styles';
import {useState} from 'react';
import {Button} from './Button';

type PropsT = {
  isVisible: boolean;
  toggleModal: () => void;
};

export const CategoryModal = (props: PropsT) => {
  const {addCategory} = useTask();
  const [value, setValue] = useState<string>('');

  const handleSubmit = () => {
    addCategory(value);
    props.toggleModal();
  };

  return (
    <Modal
      animationType="slide"
      visible={props.isVisible}
      onRequestClose={props.toggleModal}>
      <View style={styles.container}>
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={text => setValue(text)}
          placeholder="Name goes here"
        />
        <View style={styles.buttonsContainer}>
          <Button text="Close" onPress={props.toggleModal} />
          <Button text="Add" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
};
