import React from 'react';

import styled from '@emotion/styled';

import Tasks from './Tasks';

const WeekList = styled.ul({
  display: 'grid',
  gridTemplate: 'repeat(auto-fill, 130px) / repeat(7, 1fr)',
});

const WeekItem = styled.li({
  width: '100%',

  overflow: 'hidden',

  '& header': {
    padding: '0.2rem',
    textAlign: 'center',
  },
});

export default function Week({ week, onClickDate }) {
  return (
    <WeekList>
      {week.map(({ date, tasks }) => (
        <WeekItem
          key={date}
          onClick={() => onClickDate(date)}
        >
          <header>
            {date.split('/')[1]}
          </header>

          <Tasks tasks={tasks} />
        </WeekItem>
      ))}
    </WeekList>
  );
}
