import React from 'react';

import { render, screen } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  it('renders clicked date on Modal', () => {
    render(<Modal date="5/24/2021" />);

    expect(screen.getByText('5/24/2021'));
  });
});
