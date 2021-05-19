import React from 'react';

import styled from '@emotion/styled';

const Header = styled.header({
  marginRight: '0.5rem',
});

export default function CurrentDate({ date: { month, year } }) {
  return (
    <Header>
      <h2>
        {`${month}/${year}`}
      </h2>
    </Header>
  );
}
