import React from 'react';
import API_Call from '..';
import {render, waitFor} from '@testing-library/react-native';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          userId: 1,
          id: 1,
          title: 'Test Title 1',
          body: 'Test Body 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'Test Title 2',
          body: 'Test Body 2',
        },
      ]), // Mocking an empty response for simplicity
  }),
);

const component = <API_Call />;

describe('api call screen', () => {
  test('snap', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot();
  });

  it('FlatList render list',async () => {
    const {getByTestId} = render(component);
    await waitFor(() => getByTestId('List_Data_FlatList'));
    const container = getByTestId('List_Data_FlatList');
    expect(container).toBeDefined()
    // expect(container.props.data.length).toBe(2);
  });
});