import reducer, { setCurrentDate } from './appSlice';

describe('setCurrnetDate', () => {
  it('sets current month and year', () => {
    const initialState = {
      currentDate: {
        month: undefined,
        year: undefined,
      },
    };

    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const state = reducer(initialState, setCurrentDate());

    expect(state.currentDate).toEqual({ month, year });
  });
});
