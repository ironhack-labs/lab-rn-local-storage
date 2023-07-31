import React, {PropsWithChildren} from 'react';
import {View, TouchableOpacity} from 'react-native';

type FloatingActionButtonProps = PropsWithChildren<{
  action: () => void;
}>;

import styles from './styles';

const FloatingActionButton = ({
  children,
  action,
}: FloatingActionButtonProps) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.fabContainer}>{children}</View>
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
