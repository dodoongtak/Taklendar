import { createSlice } from '@reduxjs/toolkit';

import { getCurrnetDate, getDatesOfCalendar } from '../utils';

const { actions, reducer } = createSlice({
  name: 'applications',
  initialState: {
    currentDate: {
      Month: undefined,
      Year: undefined,
    },
    calendarDate: [],
    clickedDate: '',
  },
  reducers: {
    setCurrentDate(state) {
      const currentDate = getCurrnetDate();

      return {
        ...state,
        currentDate,
      };
    },

    setCalendarDate(state) {
      const { month, year } = state.currentDate;

      const calendarDate = getDatesOfCalendar({
        startDayOfMonth: new Date(year, month - 1, 1),
        endDayOfMonth: new Date(year, month, 0),
      });

      return {
        ...state,
        calendarDate,
      };
    },

    setClickedDate(state, { payload: date }) {
      return {
        ...state,
        clickedDate: date,
      };
    },
  },
});

export const {
  setCurrentDate,
  setCalendarDate,
  setClickedDate,
} = actions;

export default reducer;
