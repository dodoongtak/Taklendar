import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setClickedDate, setTasks } from '../../redux/appSlice';

import { get } from '../../utils';

import Modal from './Modal';

export default function ModalContainer() {
  const clikcedDate = useSelector(get('clickedDate'));

  const dispatch = useDispatch();

  const [task, setTaskTitle] = useState('');

  const handleClose = useCallback(() => {
    dispatch(setClickedDate(''));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    dispatch(setTasks(task));
    handleClose();

    setTaskTitle('');
  }, [task]);

  return (
    <Modal
      date={clikcedDate}
      task={task}
      setTaskTitle={setTaskTitle}
      onSubmit={handleSubmit}
      onClose={handleClose}
    />
  );
}
