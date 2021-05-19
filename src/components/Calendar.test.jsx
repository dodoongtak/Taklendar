import React from 'react';

import { render, screen } from '@testing-library/react';

import WEEKDAY from '../fixtures';

import Calendar from './Calendar';

describe('Calendar', () => {
  it('renders weekdays', () => {
    render(<Calendar />);

    WEEKDAY.forEach((DAY) => {
      expect(screen.getByText(DAY)).toBeInTheDocument();
    });
  });
});
