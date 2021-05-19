import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import DatesContainer from './DatesContainer';

describe('DatesContainer', () => {
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

  it('executes dispatch setCalendarDate', () => {
    render(<DatesContainer />);

    expect(dispatch).toBeCalledWith({
      type: 'applications/setCalendarDate',
    });
  });
});
