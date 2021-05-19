import React from 'react';

import styled from '@emotion/styled';

import CurrentDateContainer from './components/CurrentDateContainer';
import Calendar from './components/Calendar';

const PageWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '5% 95%',
});

const Aside = styled.aside({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  paddingTop: '1rem',
});

export default function App() {
  return (
    <PageWrapper>
      <Aside>
        <CurrentDateContainer />
        <h1>
          Taklendar
        </h1>
      </Aside>

      <main>
        <Calendar />
      </main>
    </PageWrapper>
  );
}
