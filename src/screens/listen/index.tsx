import {Screen} from '@components/screen';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {Button, View} from 'react-native-ui-lib';
import auth from '@react-native-firebase/auth';
import {GoogleService} from '@utils/auth/google';

export const ListenScreen = () => {
  return (
    <Screen barStyle="dark-content">
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.headerText}>Listen</Text>
          {/* <Text style={styles.bodyText}>
            Please wait. You’ll be directed to the homepage.
          </Text> */}
        </View>

        <Button
          style={styles.logoutButton}
          label="logout"
          onPress={() => {
            auth().signOut();
            GoogleService.logout();
          }}
        />
      </View>
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
    justifyContent: 'center',
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
  bottomSheetBackdrop: {
    opacity: 1.0,
    backgroundColor: 'rgba(0, 0, 0, 1.0)',
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
    fontSize: 36,
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 4,
  },
  logoutButton: {
    marginHorizontal: 20,
    marginVertical: 16,
  },
  iconGoogle: {
    position: 'absolute',
    marginLeft: 20,
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
  },
});
