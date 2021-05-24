import React from 'react';

import { render, screen } from '@testing-library/react';

import Tasks from './Tasks';

describe('Tasks', () => {
  const tasks = [
    {
      id: 1,
      description: 'timeblocks inteview',
    },
    {
      id: 2,
      description: 'Fabuolous',
    },
  ];

  it('renders tasks', () => {
    render(<Tasks tasks={tasks} />);

    expect(screen.getByText('timeblocks inteview')).toBeInTheDocument();
    expect(screen.getByText('Fabuolous')).toBeInTheDocument();
  });
});
