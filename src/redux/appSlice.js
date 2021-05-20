import { createSlice } from '@reduxjs/toolkit';

import { getCurrnetDate, getDatesOfCalendar } from '../utils';
import { convertTo2DArray } from '../utils/utils';

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

    setTasks(state, { payload: task }) {
      const calendarDate = convertTo2DArray(state.calendarDate.flat().reduce((accu, curr) => {
        if (curr.date === state.clickedDate) {
          return [...accu, { ...curr, tasks: [...curr.tasks, task] }];
        }
        return [...accu, curr];
      }, []), 7);

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
  setClickedDate,
  setTasks,
} = actions;

export default reducer;
