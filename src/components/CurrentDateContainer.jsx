import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDate } from '../redux/appSlice';

import { get } from '../utils';

import CurrentDate from './CurrentDate';

export default function CurrentDateContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentDate());
  }, []);

  const date = useSelector(get('currentDate'));

  return (<CurrentDate date={date} />);
}
