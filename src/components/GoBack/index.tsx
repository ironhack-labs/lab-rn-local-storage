import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {NativeStackParamList} from '../../types/Stack.type';

import styles from './styles';

type GoBackProps = {
  text: string;
};

const GoBack = ({text}: GoBackProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParamList>>();

  const handleGoBack = () => navigation.goBack();

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoBack;
