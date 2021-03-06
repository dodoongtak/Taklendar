import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import { WEEKDAY } from './fixtures';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  const currentDate = {
    month: '5',
    year: '2021',
  };

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      currentDate,
      calendarDate: [],
    }));
  });

  it('renders title of landing page', () => {
    render(<App />);

    expect(screen.getByText('Taklendar')).toBeInTheDocument();
  });

  it('renders current Month and Year', () => {
    render(<App />);

    const { month, year } = currentDate;

    expect(screen.getByText(`${month}/${year}`)).toBeInTheDocument();
  });

  it('renders weekdays', () => {
    render(<App />);

    WEEKDAY.forEach((DAY) => {
      expect(screen.getByText(DAY)).toBeInTheDocument();
    });
  });
});
