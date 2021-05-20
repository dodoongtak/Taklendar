import React from 'react';

import CurrentDateContainer from './components/CurrentDateContainer';
import Calendar from './components/Calendar';
import ModalContainer from './components/commons/ModalContainer';

export default function App() {
  return (
    <>
      <CurrentDateContainer />
      <h1>
        Taklendar
      </h1>

      <main>
        <Calendar />
      </main>

      <ModalContainer />
    </>
  );
}
