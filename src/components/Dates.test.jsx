import React from 'react';

import { render, screen } from '@testing-library/react';

import { DATES } from '../fixtures';

import Dates from './Dates';

describe('Calendar', () => {
  context('with dates', () => {
    it('renders weekdays', () => {
      render(<Dates dates={DATES} />);

      expect(screen.getByText(/13/)).toBeInTheDocument();
      expect(screen.getByText(/14/)).toBeInTheDocument();
    });

    it('renders the tasks', () => {
      render(<Dates dates={DATES} />);

      expect(screen.getByText('timeblocks inteview')).toBeInTheDocument();
    });
  });

  context('without dates', () => {
    it('renders loading', () => {
      render(<Dates dates="" />);

      expect(screen.getByText(/Loading/)).toBeInTheDocument();
    });
  });
});
