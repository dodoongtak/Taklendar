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
  },
});

export const {
  setCurrentDate,
  setCalendarDate,
} = actions;

export default reducer;
