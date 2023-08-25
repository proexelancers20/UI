import React from 'react';
import FunCom from '..';
import {fireEvent, render} from '@testing-library/react-native';

const compoent = <FunCom />;

describe('Function component screen', () => {
  it('snap of the screen', () => {
    const container = render(compoent);
    expect(container.toJSON()).toMatchSnapshot();

    const { getByTestId, getByText } = render(compoent);
    expect(getByText('Name:')).toBeDefined();
    fireEvent.press(getByText('Submit'));
    fireEvent.press(getByText('Pressable'));
    fireEvent.changeText(getByTestId('Enter_Name'));
    fireEvent.changeText(getByTestId('Enter_Email'))
    fireEvent.changeText(getByTestId('Enter_Password'))
  });
});
