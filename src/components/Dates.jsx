import React from 'react';

import styled from '@emotion/styled';

const WeekList = styled.ul({
  display: 'grid',
  gridTemplate: 'repeat(auto-fill, 130px) / repeat(7, 1fr)',
});

const WeekItem = styled.li({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '$ header': {
    padding: '0.2rem',
  },
});

const TaskWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Task = styled.div({
  width: '100%',
  marginBottom: '0.2rem',
  padding: '0.2rem',

  color: '#FFF',

  backgroundColor: '#FF8A3D',
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
          {week.map(({ date, tasks }) => (
            <WeekItem
              key={date}
              onClick={() => onClickDate(date)}
            >
              <header>
                {date.split('/')[1]}
              </header>

              {tasks.length > 0 && (
                <TaskWrapper>
                  {tasks.map((task) => (
                    <Task key={new Date()}>
                      <p>{task}</p>
                    </Task>
                  ))}
                </TaskWrapper>
              )}
            </WeekItem>
          ))}
        </WeekList>
      ))}
    </section>
  );
}
