import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render, screen } from '@testing-library/react';

import { DATES } from '../fixtures';

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
      calendarDate: DATES,
    }));
  });

  it('executes dispatch setCalendarDate', () => {
    render(<DatesContainer />);

    expect(dispatch).toBeCalledWith({
      type: 'applications/setCalendarDate',
    });
  });

  it('excutes dispatch setClickedDate upon clicking date', () => {
    render(<DatesContainer />);

    fireEvent.click(screen.getByText('24'));

    expect(dispatch).toBeCalledWith({
      type: 'applications/setClickedDate',
      payload: '5/24/2021',
    });
  });
});
