import React, {useMemo} from 'react';
import {Button as BaseButton} from 'react-native-ui-lib';
import {ButtonProps, ButtonSize} from './type';
import {StyleSheet} from 'react-native';

export const Button = ({
  label,
  outline,
  onPress,
  iconSource,
  iconStyle,
  children,

  style,
  labelStyle,

  size = ButtonSize.medium,
}: ButtonProps) => {
  const customButtonStyle = useMemo(() => {
    switch (size) {
      case 'large':
        return defaultStyles.largeButtonStyle;

      case 'medium':
        return defaultStyles.mediumButtonStyle;

      default:
        return {};
    }
  }, [size]);

  const customLabelStyle = useMemo(() => {
    switch (size) {
      case 'large':
        return defaultStyles.largeButtonStyle;

      case 'medium':
        return defaultStyles.mediumButtonStyle;

      default:
        return {};
    }
  }, [size]);

  return (
    <BaseButton
      outline={outline}
      label={label}
      onPress={onPress}
      iconSource={iconSource}
      iconStyle={iconStyle}
      children={children}
      style={[defaultStyles.button, customButtonStyle, style]}
      labelStyle={[defaultStyles.label, customLabelStyle, labelStyle]}
    />
  );
};

const defaultStyles = StyleSheet.create({
  button: {
    paddingVertical: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  largeButtonStyle: {paddingVertical: 20},
  mediumButtonStyle: {paddingVertical: 10},
  largeLabelStyle: {fontSize: 20},
  mediumLabelStyle: {fontSize: 10},
});
