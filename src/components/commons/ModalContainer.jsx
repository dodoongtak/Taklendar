import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../../utils';

import Modal from './Modal';

export default function ModalContainer() {
  const clikcedDate = useSelector(get('clickedDate'));

  return (
    <Modal date={clikcedDate} />
  );
}
