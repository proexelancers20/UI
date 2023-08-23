import React from 'react';
import Splash from '..';
import {render} from '@testing-library/react-native';

jest.mock('react-native-size-matters', () => ({
  scale: jest.fn(),
  verticalScale: jest.fn(),
}));
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: 'mocked-Navigator',
    Screen: 'mocked-Screen',
  }),
}));
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn(),
}));
jest.mock('react-native-svg');
jest.mock('react-native-svg-transformer');

const component = (
  <Splash
    rootNavigation={undefined}
    navContainer={false}
    globalEventListener={function (name: string, params: any): void {
      throw new Error('Function not implemented.');
    }}
    navigation={{ navigate: jest.fn(), goBack: jest.fn(), canGoBack: jest.fn() } as any}
    route={undefined as any}
  />
);

describe('Splash describe', () => {
  test('render snap', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot();
  });
  it('wrapp', () => {
    const {getByTestId} = render(component);
    const container = getByTestId('SplashWrapp');
    expect(container).toBeDefined();
  });
});
