import {Button, Modal, TextInput, View} from 'react-native';
import {useTask} from '../context/taskContext';
import styles from '../theme/CategoryModal.styles';
import {useState} from 'react';

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
          onChangeText={text => setValue(text)}
          placeholder="Name goes here"
        />
        <Button title="Add category" onPress={handleSubmit} />
        <Button title="Close" onPress={props.toggleModal} />
      </View>
    </Modal>
  );
};
