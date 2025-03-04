import {PropsWithChildren} from 'react';
import {ColorValue, StatusBarProps} from 'react-native';

export type ScreenProps = {
  backgroundColor?: ColorValue;
} & Pick<StatusBarProps, 'barStyle'> &
  PropsWithChildren;
