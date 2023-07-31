import {TouchableOpacity} from 'react-native';
import React from 'react';

import Svg, {Path} from 'react-native-svg';
import {appStyles} from '../theme/App.styles';
import {useAppNavigation} from '../hooks';

const LeftArrow = () => {
  return (
    <Svg width={13} height={15}>
      <Path d="M10.605 12.727L5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
    </Svg>
  );
};

const GoBackButton = () => {
  const {canGoBack, goBack} = useAppNavigation();

  return (
    <TouchableOpacity
      onPress={() => canGoBack() && goBack()}
      activeOpacity={0.8}
      style={appStyles.goBackButton}>
      <LeftArrow />
    </TouchableOpacity>
  );
};

export default GoBackButton;
