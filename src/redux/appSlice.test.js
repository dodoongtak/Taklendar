import reducer, {
  setCurrentDate,
  setCalendarDate,
  setClickedDate,
  setTasks,
} from './appSlice';

import { equal } from '../utils';

import { DATES } from '../fixtures';

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

describe('setClickedDate', () => {
  it('sets clicked date upon clicking day', () => {
    const initialState = {
      currentDate: {
        month: 4,
        year: 2021,
      },
      calendarDate: DATES,
    };

    const state = reducer(initialState, setClickedDate('5/9/2021'));

    expect(state.clickedDate).toBe('5/9/2021');
  });
});

describe('setTasks', () => {
  it('sets tasks into clicked date', () => {
    const initialState = {
      id: 1,
      currentDate: {
        month: 4,
        year: 2021,
      },
      calendarDate: DATES,
      clickedDate: '5/20/2021',
    };

    const state = reducer(initialState, setTasks('Work Out'));

    const clickedDate = state.calendarDate
      .flat()
      .find(equal('date', initialState.clickedDate));

    expect(clickedDate.tasks).toHaveLength(1);

    expect(clickedDate.tasks[0].id).toBe(1);
  });
});
