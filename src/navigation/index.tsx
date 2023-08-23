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

export type MicroAppsProps = {
  rootNavigation: any;
  navContainer: boolean;
  globalEventListener: (name: string, params: any) => void;
};

const Stack = createNativeStackNavigator<NavigationProps>();

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    //@ts-ignore
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    //@ts-ignore
    return this.props.children;
  }
}

const Navigation = () => {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen">
            {(screenProps: any) => <SplashScreen {...screenProps} />}
          </Stack.Screen>
          <Stack.Screen name="OnBoardScreen">
            {(screenProps: any) => <OnBoardScreen {...screenProps} />}
          </Stack.Screen>
          <Stack.Screen name="WelcomeScreen">
            {(screenProps: any) => <WelcomeScreen {...screenProps} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default Navigation;
