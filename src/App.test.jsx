import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import { getCurrnetDate } from './utils';

import App from './App';

describe('App', () => {
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

  it('renders title of landing page', () => {
    render(<App />);

    expect(screen.getByText('Taklendar')).toBeInTheDocument();
  });

  it('renders current Month and Year', () => {
    render(<App />);

    const { month, year } = getCurrnetDate();

    expect(screen.getByText(`${month}/${year}`)).toBeInTheDocument();
  });
});
