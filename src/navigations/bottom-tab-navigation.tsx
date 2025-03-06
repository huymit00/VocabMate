import {Icon} from '@components/icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountScreen} from '@screens/account';
import {ExamScreen} from '@screens/exam';
import {HomeScreen} from '@screens/home';
import {ListenScreen} from '@screens/listen';
import React from 'react';

const tabBarIcon =
  (routeName: string) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
    let iconName: string;

    switch (routeName) {
      case 'Home':
        iconName = focused ? 'home' : 'home';
        break;
      case 'Flash Card':
        iconName = focused ? 'card-multiple' : 'card-multiple';
        break;
      case 'Exam':
        iconName = focused ? 'school' : 'school';
        break;
      case 'Listen':
        iconName = focused ? 'headphones' : 'headphones';
        break;
      default:
        iconName = focused ? 'account' : 'account';
        break;
    }

    // const type: IconType =
    //   routeName === 'Listen' ? 'Ionicons' : 'MaterialCommunityIcons';

    return (
      <Icon
        type={'MaterialCommunityIcons'}
        name={iconName}
        color={color}
        size={size}
      />
    );
  };

const Tab = createBottomTabNavigator();
export const MoreTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: tabBarIcon(route.name),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Flash Card" component={AccountScreen} />
      <Tab.Screen name="Listen" component={ListenScreen} />
      <Tab.Screen name="Exam" component={ExamScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
