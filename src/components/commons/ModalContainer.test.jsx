import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ModalContainer from './ModalContainer';

describe('ModalContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      clickedDate: '5/24/2021',
    }));
  });

  it('excutes dispatch setTasks upon submission', () => {
    render(<ModalContainer />);

    fireEvent.input(screen.getByLabelText(/task/), {
      target: {
        value: 'Work Out',
      },
    });

    fireEvent.click(screen.getByRole('button', {
      value: 'Confirm',
    }));

    expect(dispatch).toBeCalledWith({
      type: 'applications/setTasks',
      payload: 'Work Out',
    });
  });
});
