import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCalendarDate } from '../redux/appSlice';

import { get } from '../utils';

import Dates from './Dates';

export default function DatesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCalendarDate());
  }, []);

  const dates = useSelector(get('calendarDate'));

  return (
    <Dates dates={dates} />
  );
}
