import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IndexPath, Select, SelectItem} from '@ui-kitten/components';
import React, {useContext, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../navigation/Navigation';
import TasksActions from '../services/Actions';
import {categories, statuses} from '../services/Constants';
import {TasksDispatchContext} from '../services/Store';
import {ITaskItem} from '../services/interface';

interface ItemForm {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
}

type TaskDetailRouteProps = RouteProp<RootStackParamList, 'Detail'>;

const TaskDetail = () => {
  const route = useRoute<TaskDetailRouteProps>();

  const {navigate, pop} =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  const dispatch = useContext(TasksDispatchContext);

  const {
    control,
    formState: {errors},
    handleSubmit,
    reset,
    setValue,
  } = useForm<ITaskItem>();

  useEffect(() => {
    if (route.params) {
      setValue('id', route.params.id);
      setValue('title', route.params.title);
      setValue('description', route.params.description);
      setValue('category', route.params.category);
      setValue('status', route.params.status);
    }
  }, []);

  const [selectedStatus, setSelectedStatus] = React.useState<IndexPath>(
    new IndexPath(0),
  );

  const onSubmit = (_task: ItemForm) => {
    const task: ITaskItem = {
      id: _task.id,
      title: _task.title,
      description: _task.description,
      category: _task.category,
      status: _task.status,
    };

    dispatch(TasksActions.UPDATE_TASK(task));
    navigate('TaskListHome', {init: true});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Agregar tarea</Text>
      <ScrollView style={styles.scroll}>
        <Controller
          name="id"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              editable={false}
              onChangeText={onChange}
              style={styles.input}
              placeholderTextColor={'rgb(143, 155, 179)'}
              placeholder="Número de tarea"
              onBlur={onBlur}
              value={`${value || ''}`}
            />
          )}
        />
        {errors.id && <Text>{errors.id.message}</Text>}
        <Controller
          name="title"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              editable={false}
              onChangeText={onChange}
              style={styles.input}
              placeholderTextColor={'rgb(143, 155, 179)'}
              placeholder="Nombre"
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.title && <Text>{errors.title.message}</Text>}
        <Controller
          name="description"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              editable={false}
              onChangeText={onChange}
              style={styles.input}
              placeholderTextColor={'rgb(143, 155, 179)'}
              placeholder="Descripción"
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.description && <Text>{errors.description.message}</Text>}
        <Controller
          name="category"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Select
              disabled
              onSelect={(index: any) => {
                onChange(categories[index.row]);
              }}
              placeholder={'Escoge una categoria'}
              value={`${value || ''}`}
              onBlur={onBlur}
              style={styles.margin}>
              {categories.map(category => (
                <SelectItem key={category} title={category} />
              ))}
            </Select>
          )}
        />
        {errors.category && <Text>{errors.category.message}</Text>}
        <Controller
          name="status"
          rules={{required: 'Este campo es obligatorio'}}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Select
              onSelect={(index: any) => {
                onChange(statuses[index.row]);
                setSelectedStatus(index);
              }}
              placeholder={'Escoge el estado'}
              onBlur={onBlur}
              value={`${value || ''}`}
              style={styles.margin}>
              {statuses.map(status => (
                <SelectItem key={status} title={status} />
              ))}
            </Select>
          )}
        />
        {errors.status && <Text>{errors.status.message}</Text>}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('TaskListHome', {init: false})}>
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlePage: {
    color: '#ffffff',
    fontSize: 24,
    padding: 10,
  },
  scroll: {
    padding: 10,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    borderColor: '#101426',
    color: '#ffffff',
  },
  margin: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F2668B',
    borderRadius: 5,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 18,
  },
});

export default TaskDetail;
