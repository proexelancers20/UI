import React from 'react';
import WelcomeScreen from '..';
import { render } from '@testing-library/react-native';

jest.mock('react-native-size-matters',() => ({
    scale: jest.fn(),
    verticalScale: jest.fn()
}));

const component = (
  <WelcomeScreen
    rootNavigation={undefined}
    navContainer={false}
    globalEventListener={function (name: string, params: any): void {
      throw new Error('Function not implemented.');
    }}
    navigation={{ navigate: jest.fn(), goBack: jest.fn(), canGoBack: jest.fn() } as any}
    route={undefined as any }
  />
);

describe('Welcome Screen', () => {
  it('render snap welcome screen', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot()
  })
});
