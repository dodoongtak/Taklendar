import React from 'react';

import { render, screen } from '@testing-library/react';

import Week from './Week';

describe('Tasks', () => {
  const week = [
    {
      id: 1, date: '4/25/2021', day: 'Sunday', tasks: [],
    },
    {
      id: 2, date: '4/26/2021', day: 'Monday', tasks: [],
    },
    {
      id: 3, date: '4/27/2021', day: 'Tuesday', tasks: [],
    },
    {
      id: 4, date: '4/28/2021', day: 'Wednesday', tasks: [],
    },
    {
      id: 5, date: '4/29/2021', day: 'Thursday', tasks: [],
    },
    {
      id: 6, date: '4/30/2021', day: 'Friday', tasks: [],
    },
    {
      id: 7, date: '5/1/2021', day: 'Saturday', tasks: [],
    },
  ];

  it('renders dates of week', () => {
    render(<Week week={week} />);

    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('26')).toBeInTheDocument();
  });
});
