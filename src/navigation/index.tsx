import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/Splash';
import OnBoardScreen from '../screens/OnBoard';
import WelcomeScreen from '../screens/Welcome';

export type NavigationProps = {
  SplashScreen: undefined;
  OnBoardScreen: undefined;
  WelcomeScreen: undefined;
};

const Stack = createNativeStackNavigator<NavigationProps>();

const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation;
