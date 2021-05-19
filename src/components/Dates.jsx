import React from 'react';

import styled from '@emotion/styled';

const WeekList = styled.ul({
  display: 'grid',
  gridTemplate: 'repeat(auto-fill, 130px) / repeat(7, 1fr)',
});

const WeekItem = styled.li({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export default function Dates({ dates, onClickDate }) {
  if (!dates) {
    return (
      <span>
        Loading...
      </span>
    );
  }
  return (
    <section>
      {dates.map((week) => (
        <WeekList key={week[0].id}>
          {week.map(({ date }) => (
            <WeekItem
              key={date}
              onClick={() => onClickDate(date)}
            >
              <span>
                {date.split('/')[1]}
              </span>
            </WeekItem>
          ))}
        </WeekList>
      ))}
    </section>
  );
}
