import React from "react";
import App from "../src/App";
import renderer from 'react-test-renderer';
import {it} from '@jest/globals';

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: 'mocked-Navigator',
    Screen: 'mocked-Screen',
  })
}));
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn()
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

it('renders correctly', () => {
  renderer.create(<App />);
});