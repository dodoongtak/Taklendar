import reducer, { setCurrentDate, setCalendarDate } from './appSlice';

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();

describe('setCurrnetDate', () => {
  it('sets current month and year', () => {
    const initialState = {
      currentDate: {
        month: undefined,
        year: undefined,
      },
    };

    const state = reducer(initialState, setCurrentDate());

    expect(state.currentDate).toEqual({ month: month + 1, year });
  });
});

describe('setCalendarDate', () => {
  it('sets dates of corresponding month on calendar', () => {
    const initialState = {
      currentDate: {
        month: 4,
        year: 2021,
      },
    };

    const state = reducer(initialState, setCalendarDate());

    expect(state.calendarDate).toBeInstanceOf(Array);
  });
});
