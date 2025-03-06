import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@screens/login';
import {WelcomeScreen} from '@screens/welcome';
import React, {useEffect, useState} from 'react';
import {MoreTabs} from './bottom-tab-navigation';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setIsLogin(!!user); //có user thì login
    });
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {isLogin ? (
          <Stack.Group>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="More"
              component={MoreTabs}
              options={{headerShown: false}}
            />
          </Stack.Group>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
