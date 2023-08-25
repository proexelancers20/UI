import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/Splash';
import OnBoardScreen from '../screens/OnBoard';
import WelcomeScreen from '../screens/Welcome';
import API_Call from '../screens/API_Call';

export type NavigationProps = {
  SplashScreen: undefined;
  OnBoardScreen: undefined;
  WelcomeScreen: undefined;
  API_Call: undefined;
};

const Stack = createNativeStackNavigator<NavigationProps>();

const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='API_Call' screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="API_Call" component={API_Call} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation;
