import React from 'react';

import { render, screen } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { WEEKDAY } from '../fixtures';

import Calendar from './Calendar';

describe('Calendar', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders weekdays', () => {
    render(<Calendar />);

    WEEKDAY.forEach((DAY) => {
      expect(screen.getByText(DAY)).toBeInTheDocument();
    });
  });
});
