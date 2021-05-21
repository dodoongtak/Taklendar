import React from 'react';

import { render, screen } from '@testing-library/react';

import Tasks from './Tasks';

describe('Tasks', () => {
  const tasks = ['timeblocks inteview', 'Fabuolous'];

  it('renders tasks', () => {
    render(<Tasks tasks={tasks} />);

    expect(screen.getByText('timeblocks inteview')).toBeInTheDocument();
    expect(screen.getByText('Fabuolous')).toBeInTheDocument();
  });
});
