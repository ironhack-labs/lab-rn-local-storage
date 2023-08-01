/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller, SubmitHandler, FieldValues} from 'react-hook-form';
import {FormData} from '../../interfaces/interfaces';
import MyButton from './MyButton';
import {useApp} from '../context/Context';
import {Task as TTask} from '../types/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavListBase} from '../navigation/NavListBase';

const FormEdit: React.FC<TTask> = ({
  title,
  description,
  category,
  status,
  id,
}) => {
  const {goBack} = useNavigation<NavigationProp<NavListBase>>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const {editTask} = useApp();

  const onSubmit = (formData: TTask) => {
    try {
      editTask({...formData, status, id});
      goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Title"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="title"
          defaultValue={title}
        />
        {errors.title && <Text>{errors.title.message}</Text>}
      </View>

      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Description"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="description"
          defaultValue={description}
        />
        {errors.description && <Text>{errors.description.message}</Text>}
      </View>

      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Uncategorized, School, Work or Home"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="category"
          defaultValue={category}
        />
        {errors.description && <Text>{errors.description.message}</Text>}
      </View>

      <View style={styles.controls}>
        <MyButton
          title="Edit"
          onPress={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
        />
      </View>
    </View>
  );
};

export default FormEdit;

const styles = StyleSheet.create({
  containerInput: {
    marginVertical: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  controls: {
    alignItems: 'center',
  },
});
