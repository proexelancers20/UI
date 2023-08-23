import React from 'react';
import Navigation from '..';
import {fireEvent, render} from '@testing-library/react-native';

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: 'mocked-Navigator',
    Screen: 'mocked-Screen',
  }),
}));
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn(),
}));
jest.mock('react-native-size-matters',() => ({
    scale: jest.fn(), 
    verticalScale: jest.fn()
}));
jest.mock('react-native-swiper', () => {
  const React = require('react');
  const Swiper = (props: any) => {
    // Mock implementation of Swiper
    return React.createElement('View', { 'data-testid': 'mock-swiper' }, 'Mock Swiper Component');
  };
  return Swiper;
});

const component = <Navigation />;

describe('Render Navigation', () => {
  test('snap', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
