import React, { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCalendarDate, setClickedDate } from '../redux/appSlice';

import { get } from '../utils';

import Dates from './Dates';

export default function DatesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCalendarDate());
  }, []);

  const dates = useSelector(get('calendarDate'));

  const handleClickDate = useCallback((date) => {
    dispatch(setClickedDate(date));
  }, [dispatch]);

  return (
    <Dates
      dates={dates}
      onClickDate={handleClickDate}
    />
  );
}
