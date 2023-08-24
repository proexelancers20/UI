import React from 'react';
import WelcomeScreen from '..';
import { fireEvent, render } from '@testing-library/react-native';

jest.mock('react-native-size-matters',() => ({
    scale: jest.fn(),
    verticalScale: jest.fn()
}));

const component = (
  <WelcomeScreen
    navigation={{ navigate: jest.fn(), goBack: jest.fn(), canGoBack: jest.fn() } as any}
    route={undefined as any }
  />
);

describe('Welcome Screen', () => {
  it('render snap welcome screen', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot()
  })
  it('welcome sign up button', () => {
    const {getByTestId} = render(component)
    const container = getByTestId('Welcome_sign_up_button')
    fireEvent.press(container)
  })
  it('welcome create your profile button', () => {
    const { getByTestId } = render(component)
    const container = getByTestId('Welcome_create_profile_button')
     fireEvent.press(container)
  })
  it('terms press open link',() => {
    const { getByTestId } = render(component)
    fireEvent.press(getByTestId('terms_text_press'))
  })
});
