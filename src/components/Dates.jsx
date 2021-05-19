import React from 'react';

import styled from '@emotion/styled';

const WeekWrapper = styled.div({
  display: 'grid',
  gridTemplate: 'repeat(auto-fill, 100px) / repeat(7, 1fr)',

  '& span': {
    padding: '0.5rem',
  },
});

export default function Dates({ dates }) {
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
        <WeekWrapper key={week[0].id}>
          {week.map(({ date }) => (
            <span key={date}>
              {date.split('/')[1]}
            </span>
          ))}
        </WeekWrapper>
      ))}
    </section>
  );
}
