import { WEEKDAY } from '../fixtures';

export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function getCurrnetDate() {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  return {
    month: month + 1,
    year,
  };
}

export function convertDateToString(date) {
  return date.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
}

export function getPaddingDays(edge) {
  const paddingDays = convertDateToString(edge);

  return WEEKDAY.indexOf(paddingDays.split(', ')[0]);
}

export function convertTo2DArray(lists, index) {
  const twoDiemensionalArray = [];
  while (lists.length > 0) {
    twoDiemensionalArray.push(lists.splice(0, index));
  }

  return twoDiemensionalArray;
}

export function getDatesOfCalendar({ startDayOfMonth, endDayOfMonth }) {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const previousDays = getPaddingDays(startDayOfMonth);
  const nextDays = 6 - getPaddingDays(endDayOfMonth);

  let calendar = [];

  const totalDays = previousDays + endDayOfMonth.getDate() + nextDays;

  for (let i = 1; i <= totalDays; i += 1) {
    const dateString = convertDateToString(new Date(year, month, i - previousDays));

    calendar = [...calendar, {
      id: i,
      date: dateString.split(', ')[1],
      day: dateString.split(', ')[0],
      tasks: [],
    }];
  }

  return convertTo2DArray(calendar, 7);
}
