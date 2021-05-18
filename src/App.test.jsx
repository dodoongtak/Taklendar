import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the title of landing page', () => {
    render(<App />);

    expect(screen.getByText('Taklendar'));
  });
});
