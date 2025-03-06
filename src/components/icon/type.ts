import {IconProps as IconPropsBase} from 'react-native-vector-icons/Icon';

export const IconType = {
  Ionicons: 'Ionicons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
} as const;

export type IconType = keyof typeof IconType;

export type IconProps = IconPropsBase & {
  type: IconType;
};
