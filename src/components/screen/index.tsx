import React, {memo} from 'react';
import {ScreenProps} from './type';
import isEqual from 'react-fast-compare';
import {StatusBar, StyleSheet, View} from 'react-native';
export const Screen = memo(
  ({children, backgroundColor, barStyle}: ScreenProps) => {
    return (
      <View style={styles.flex}>
        <StatusBar
          barStyle={barStyle}
          translucent
          backgroundColor={'#00000000'}
        />
        <View style={[styles.flex, {backgroundColor}]}>{children}</View>
      </View>
    );
  },
  isEqual,
);

const styles = StyleSheet.create({
  flex: {flex: 1},
});
