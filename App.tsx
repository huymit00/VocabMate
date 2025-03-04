/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {GoogleService} from './src/utils/auth/google';
import {AppNavigation} from '@navigations/app-navigation';

export default function App() {
  useEffect(() => {
    GoogleService.init();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigation />
    </GestureHandlerRootView>
  );
}
