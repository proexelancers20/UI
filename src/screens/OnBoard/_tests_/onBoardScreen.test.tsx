import React from 'react';
import OnBoardScreen from '..';
import { fireEvent, render } from '@testing-library/react-native';

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
  jest.mock('react-native-swiper', () => {
    const React = require('react');
    const Swiper = (props: any) => {
      // Mock implementation of Swiper
      return React.createElement('View', { 'data-testid': 'mock-swiper' }, 'Mock Swiper Component');
    };
    return Swiper;
  });

const component = (
  <OnBoardScreen
    navigation={{ navigate: jest.fn(), goBack: jest.fn(), canGoBack: jest.fn() } as any}
    route={undefined as any}
  />
);

describe('OnBoardScreen describe', () => {
    it('render snap', () => {
        const container = render(component)
        expect(container.toJSON()).toMatchSnapshot()
    })
    it('skip button press', () => {
        const { getByTestId } = render(component)
        const container = getByTestId('skipButton');
        fireEvent.press(container)
    })
});
