import React from 'react';

import WEEKDAY from '../fixtures';

export default function Calendar() {
  return (
    <article>
      <header>
        <ul>
          {[...WEEKDAY].map((DAY) => (
            <li key={DAY}>
              {DAY}
            </li>
          ))}
        </ul>
      </header>
    </article>
  );
}
