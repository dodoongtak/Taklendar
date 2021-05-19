import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CurrentDateContainer from './CurrentDateContainer';

describe('CurrentDateContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      currentDate: {
        month: '5',
        year: '2021',
      },
    }));
  });

  it('executes dispatch setCurrentDate', () => {
    render(<CurrentDateContainer />);

    expect(dispatch).toBeCalledWith({
      type: 'applications/setCurrentDate',
    });
  });
});
