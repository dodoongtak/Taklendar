import { getCurrnetDate } from './utils';

describe('getCurrnetDate', () => {
  it('returns current Month and Year', () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    expect(getCurrnetDate()).toEqual({ month, year });
  });
});
