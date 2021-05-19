import React from 'react';

import { render, screen } from '@testing-library/react';

import CurrentDate from './CurrentDate';

describe('CurrentDate', () => {
  it('renders current Month and Year', () => {
    render((
      <CurrentDate
        date={{ month: 5, year: 2021 }}
      />
    ));

    expect(screen.getByText('5/2021')).toBeInTheDocument();
  });
});
