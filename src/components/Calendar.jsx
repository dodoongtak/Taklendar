import React from 'react';

import styled from '@emotion/styled';

import { WEEKDAY } from '../fixtures';

import DatesContainer from './DatesContainer';

const WeekdaysList = styled.ul({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
});

const WeekdaysItem = styled.li({
  margin: '0 auto',
  padding: '0.5rem',
});

export default function Calendar() {
  return (
    <article>
      <header>
        <WeekdaysList>
          {[...WEEKDAY].map((DAY) => (
            <WeekdaysItem key={DAY}>
              {DAY}
            </WeekdaysItem>
          ))}
        </WeekdaysList>
      </header>

      <DatesContainer />
    </article>
  );
}
