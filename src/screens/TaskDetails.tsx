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
    <View style={styles.container}>
      <View>
        <GoBackBtn />
        <FormEdit
          title={title}
          description={description}
          category={category}
          status={status}
          id={id}
        />
      </View>
      <View style={styles.options}>
        <MyButton title="Delete task" onPress={() => handleRemove()} />
      </View>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: 10,
  },
  options: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
