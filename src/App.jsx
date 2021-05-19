import React from 'react';

import CurrentDateContainer from './components/CurrentDateContainer';
import Calendar from './components/Calendar';

export default function App() {
  return (
    <>
      <h1>
        Taklendar
      </h1>
      <CurrentDateContainer />

      <main>
        <Calendar />
      </main>
    </>
  );
}
