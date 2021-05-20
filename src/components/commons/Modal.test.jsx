import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  const setTasktitle = jest.fn();

  it('renders clicked date on Modal', () => {
    render(<Modal date="5/24/2021" />);

    expect(screen.getByText('5/24/2021'));
  });

  it('listens to change events', () => {
    render((
      <Modal
        date="5/24/2021"
        task=""
        setTaskTitle={setTasktitle}
      />
    ));

    fireEvent.input(screen.getByLabelText(/task/), {
      target: {
        value: 'timeblocks',
      },
    });

    expect(setTasktitle).toBeCalled();
  });
});
