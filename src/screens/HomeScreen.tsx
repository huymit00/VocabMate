import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image, ProgressBar} from 'react-native-ui-lib';
import {Button} from '../components/button';
import {Body} from './body';
import {Screen} from '../components/screen';

const iconGoogle = require('../icons/google.png');

export const HomeScreen = () => {
  // const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [index, setIndex] = useState(1);

  const nextIndex = () => {
    if (index === 3) {
      bottomSheetRef.current?.expand();
    } else {
      setIndex(index + 1);
    }
  };

  let progress = useMemo(() => {
    return (index / 3) * 100;
  }, [index]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <Screen barStyle="dark-content">
      <View
        style={[
          styles.container,
          {paddingTop: insets.top, paddingBottom: insets.bottom},
        ]}>
        <View style={styles.bar}>
          <ProgressBar progress={progress} />
        </View>
        <Body index={index} />

        <View style={styles.buttonView}>
          <Button
            outline={index !== 3}
            label={index !== 3 ? 'Continue' : 'Log in or Sign up'}
            onPress={nextIndex}
          />
        </View>
      </View>
      <BottomSheet
        style={styles.bottomSheet}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={-1}
        snapPoints={['50%']}
        enablePanDownToClose
        // backdropComponent={({animatedIndex, animatedPosition, style}) => (
        //   <BottomSheetBackdrop
        //     animatedIndex={animatedIndex}
        //     animatedPosition={animatedPosition}
        //     // opacity={1}
        //     style={[style, {opacity: 0}]}
        //   />
        // )}

        // eslint-disable-next-line react/no-unstable-nested-components
        backdropComponent={({animatedIndex, animatedPosition, style}) => (
          <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior="close"
            animatedIndex={animatedIndex}
            animatedPosition={animatedPosition}
            style={[
              style,
              {opacity: 1.0},
              {backgroundColor: 'rgba(0, 0, 0, 1.0)'},
            ]}
          />
        )}>
        <BottomSheetView style={styles.bottomSheetViewContainer}>
          <View style={styles.textView}>
            <Text style={styles.headerText}>Log in or sign up</Text>
            <Text style={styles.bodyText}>
              Choose the best option to continue.
            </Text>
          </View>

          <View style={styles.buttonBottomSheetView}>
            <Button label="Sign up with email" />
            <Button
              outline
              label="Log in with Google"
              style={styles.loginButton}>
              <Image source={iconGoogle} style={styles.iconGoogle} />
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Screen>
  );
};

const styles = StyleSheet.create({
  bar: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },

  textView: {
    paddingVertical: 16,

    paddingHorizontal: 20,
  },

  buttonView: {
    rowGap: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16.0,

    elevation: 50,
  },

  bottomSheetViewContainer: {
    flex: 1,
    paddingVertical: 16,
  },

  buttonBottomSheetView: {
    rowGap: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 4,
  },
  loginButton: {
    flexDirection: 'column',
  },
  iconGoogle: {
    position: 'absolute',
    marginLeft: 20,
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
  },
});
