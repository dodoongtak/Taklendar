import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import { getCurrnetDate } from '../utils';

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

  it('renders current Month and Year', () => {
    render(<CurrentDateContainer />);

    const { month, year } = getCurrnetDate();

    expect(dispatch).toBeCalledWith({
      type: 'applications/setCurrentDate',
    });

    expect(screen.getByText(`${month}/${year}`));
  });
});
