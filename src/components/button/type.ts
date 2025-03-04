import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ButtonProps as BaseButtonProps} from 'react-native-ui-lib';

export const ButtonSize = {medium: 'medium', large: 'large'} as const;

export type ButtonSize = keyof typeof ButtonSize;

export type ButtonProps = Pick<
  BaseButtonProps,
  'label' | 'onPress' | 'outline' | 'iconSource' | 'iconStyle' | 'children'
> & {
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;

  /**
   * @default ButtonSize.medium
   */
  size?: ButtonSize;
};
