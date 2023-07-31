import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TaskStackParamList} from '../types';

const useAppNavigation = (): NativeStackNavigationProp<TaskStackParamList> => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TaskStackParamList>>();

  return {...navigation};
};

export default useAppNavigation;
