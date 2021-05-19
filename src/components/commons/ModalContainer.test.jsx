import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ModalContainer from './ModalContainer';

describe('Modal', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      clickedDate: '5/24/2021',
    }));
  });

  it('TODO: TO BE TESTED', () => {
    render(<ModalContainer />);
  });
});
