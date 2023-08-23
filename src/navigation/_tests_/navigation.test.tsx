import React from 'react';
import Navigation from '..';
import {render} from '@testing-library/react-native';

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

const component = <Navigation />;

describe('Render Navigation', () => {
  test('snap', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
