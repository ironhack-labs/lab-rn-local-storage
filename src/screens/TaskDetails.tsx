import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
import MyButton from '../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import {DetailsScreenProps} from '../navigation/NavListBase';
import {useApp} from '../context/Context';
import FormEdit from '../components/FormEdit';

const TaskDetails: React.FC<DetailsScreenProps> = ({route}) => {
  const {title, description, category, status, id} = route.params;
  const {removeTask} = useApp();
  const {goBack} = useNavigation();

  const handleRemove = () => {
    console.log('route.params --> ', route.params);
    
    removeTask(route.params);
    goBack();
  };
  return (
    <View>
      <GoBackBtn />
      <View style={styles.containerDetails}>
        <FormEdit
          title={title}
          description={description}
          category={category}
          status={status}
          id={id}
        />
        <View style={styles.options}>
          <MyButton title="Delete task" onPress={() => handleRemove()} />
        </View>
      </View>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  containerDetails: {
    marginVertical: 10,
  },
  text: {
    marginBottom: 10,
  },
  options: {
    alignItems: 'center',
  },
});
