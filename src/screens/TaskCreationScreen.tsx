import {Controller, useForm} from 'react-hook-form';
import {Button, TextInput, View} from 'react-native';
import {TaskT, useTask} from '../context/taskContext';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigatonT} from '../../navigation/AppNavigator';
import appStyles from '../styles';
import styles from '../theme/TaskCreationScreen.styles';
import Picker from 'react-native-picker-select';
import {useState} from 'react';
import {CategoryModal} from '../components/CategoryModal';

export const TaskCreationScreen = () => {
  const {categories, addTask} = useTask();
  const {goBack} =
    useNavigation<NativeStackNavigationProp<RootStackNavigatonT>>();
  const {control, handleSubmit} = useForm<TaskT>();
  const selectCategories = categories.map(category => ({
    value: category,
    label: category,
  }));

  const [showModalCategory, setShowModalCategory] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModalCategory(!showModalCategory);
  };

  const onSubmit = (data: TaskT) => {
    addTask({...data, completion: false, id: uuid.v4().toString()});
    goBack();
  };

  return (
    <View style={appStyles.container}>
      <Controller
        name="title"
        defaultValue=""
        control={control}
        rules={{required: 'Title is required'}}
        render={({field: {onChange, value}}) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Type a title"
          />
        )}
      />
      <View>
        <Controller
          name="category"
          control={control}
          rules={{required: 'Category is required'}}
          render={({field: {onChange, value}}) => (
            <Picker
              value={value}
              style={styles.dropdown}
              onValueChange={onChange}
              items={selectCategories}
            />
          )}
        />
        <Button title="Add category" onPress={toggleModal} />
      </View>
      <Controller
        name="description"
        defaultValue=""
        control={control}
        rules={{required: 'Description is required'}}
        render={({field: {onChange, value}}) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Description goes here"
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <CategoryModal isVisible={showModalCategory} toggleModal={toggleModal} />
    </View>
  );
};
