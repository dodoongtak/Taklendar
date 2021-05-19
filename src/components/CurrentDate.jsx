import React from 'react';

export default function CurrentDate({ date: { month, year } }) {
  return (
    <header>
      <h2>
        {`${month}/${year}`}
      </h2>
    </header>
  );
}
