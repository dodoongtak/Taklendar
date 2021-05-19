import { createSlice } from '@reduxjs/toolkit';

import { getCurrnetDate } from '../utils';

const { actions, reducer } = createSlice({
  name: 'applications',
  initialState: {
    currentDate: {
      Month: undefined,
      Year: undefined,
    },
  },
  reducers: {
    setCurrentDate(state) {
      const currentDate = getCurrnetDate();

      return {
        ...state,
        currentDate,
      };
    },
  },
});

export const {
  setCurrentDate,
} = actions;

export default reducer;
