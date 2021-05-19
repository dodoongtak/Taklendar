import {
  getCurrnetDate,
  convertDateToString,
  getDatesOfCalendar,
  getPaddingDays,
} from './utils';

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();

describe('getCurrnetDate', () => {
  it('returns current Month and Year', () => {
    expect(getCurrnetDate()).toEqual({ month: month + 1, year });
  });
});

describe('getDatesOfCalendar', () => {
  it('returns dates of corresponding Month on calendar', () => {
    const startDayOfMonth = new Date(year, month, 1);
    const endDayOfMonth = new Date(year, month + 1, 0);

    expect(getDatesOfCalendar({ startDayOfMonth, endDayOfMonth })).toBeInstanceOf(Array);
  });
});

test('convertDateToString', () => {
  const FirstDayofMay = new Date(2021, 4, 1);

  expect(convertDateToString(FirstDayofMay)).toBe('Saturday, 5/1/2021');
});

test('getPaddingDays', () => {
  const FirstDayofMay = new Date(2021, 4, 1);

  expect(getPaddingDays(FirstDayofMay)).toBe(6);
});
