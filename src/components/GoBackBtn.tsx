import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import MyButton from './MyButton';

const GoBackBtn = () => {
  const {goBack} = useNavigation();
  return <MyButton title="Back" onPress={goBack} />;
};

export default GoBackBtn;
