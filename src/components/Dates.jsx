import React from 'react';
import Week from './Week';

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
        <Week
          key={week[0].id}
          week={week}
          onClickDate={onClickDate}
        />
      ))}
    </section>
  );
}
