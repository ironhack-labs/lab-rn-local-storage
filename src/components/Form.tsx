/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {FormData} from '../../interfaces/interfaces';
import MyButton from './MyButton';
import {useApp} from '../context/Context';
import {Task, Category} from '../types/types';

const Form: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const {addTask} = useApp();

  const category: Category = 'uncategorized';

  const defaultData: Task = {
    title: '',
    description: '',
    category: '',
    status: false,
    id: Date.now(),
  };

  const onSubmit = (data: FormData) => {
    console.log('data --> ', data);
    data.id = Date.now();
    data.category = data.category.toLocaleLowerCase();
    try {
      addTask(data);
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
          defaultValue={defaultData.title}
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
          defaultValue={defaultData.description}
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
          defaultValue={defaultData.category}
        />
        {errors.description && <Text>{errors.description.message}</Text>}
      </View>

      <View style={styles.controls}>
        <MyButton title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default Form;

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
