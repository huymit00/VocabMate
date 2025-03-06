import React, {memo} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from './type';

export const Icon = memo(({type, ...rest}: IconProps) => {
  switch (type) {
    case 'Ionicons':
      return <Ionicons {...rest} />;

    default:
      return <MaterialCommunityIcons {...rest} />;
  }
});
